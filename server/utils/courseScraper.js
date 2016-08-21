import {includes} from 'lodash'
import fs from 'fs'
import noodle from 'noodlejs'

noodle.query({
  url: 'http://www.folf.is/folfvellir-a-islandi-4/',
  type: 'html',
  selector: 'div.entry-content p strong',
}).then((results) => {
  const potentialCourses = results.results[0].results
  const coursesWithLocation = potentialCourses.map(
    (c) => c.split('–')
  ).filter(
    (c) => includes(['Sækja kort.', 'Kort af velli', 'Sækja skorkort.', '—'], c[0]) !== true
  ).map((c) => {
    if (c[0] && c[0].trim() === 'Miðhúsaskógur (við Laugarvatn)') {
      return ['Miðhúsaskógur', 'Laugarvatn']
    } else if (c[2] && c[2].trim() === 'Breiðholt') {
      return ['Fella- og Hólahverfi', 'Breiðholt']
    } else if (c[2] && c[2].trim() === 'Seljahverfi') {
      return ['Seljahverfi', 'Breiðholt']
    } else if (c[1] && c[1].trim() === 'Gufunes í Grafarvogi') {
      return ['Gufunes', 'Grafarvogur']
    } else if (c[1] && c[1].trim() === 'á tjaldsvæði Rafiðnaðarsambands Íslands') {
      return [c[0].trim(), 'Laugarvatn']
    } else if (c.length > 2) {
      return [c[1].trim(), c[0].trim()]
    }
    if (c.length === 2) {
      return [c[1].trim(), c[0].trim()]
    }
    return c
  })
  const normalizedCourses = coursesWithLocation.reduce((current, value) => {
    current[value[0]] = {
      name: value[0],
      city: value[1] || value[0],
    }
    return current
  }, {})
  fs.writeFile('courses.json', JSON.stringify({
    courses: normalizedCourses,
  }, null, 2), null, () => {
    process.exit(0)
  })
})
