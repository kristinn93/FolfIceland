import _ from 'lodash'
import {Map, fromJS} from 'immutable'
import type {Course} from '../schemas/flow/course'

const courses: Map<string, Course> = fromJS({
  Garðalundur: {
    name: 'Garðalundur',
    city: 'Akranes',
  },
  Eiðsvöllur: {
    name: 'Eiðsvöllur',
    city: 'Akureyri',
  },
  Glerárskóli: {
    name: 'Glerárskóli',
    city: 'Akureyri',
  },
  Hamrakotstún: {
    name: 'Hamrakotstún',
    city: 'Akureyri',
  },
  Hamrar: {
    name: 'Hamrar',
    city: 'Akureyri',
  },
  Apavatn: {
    name: 'Apavatn',
    city: 'Laugarvatn',
  },
  Bifröst: {
    name: 'Bifröst',
    city: 'Bifröst',
  },
  Bolungarvík: {
    name: 'Bolungarvík',
    city: 'Bolungarvík',
  },
  Tjarnargarðurinn: {
    name: 'Tjarnargarðurinn',
    city: 'Egilsstaðir',
  },
  Flateyri: {
    name: 'Flateyri',
    city: 'Flateyri',
  },
  Flúðir: {
    name: 'Flúðir',
    city: 'Flúðir',
  },
  Víðistaðatún: {
    name: 'Víðistaðatún',
    city: 'Hafnafjörður',
  },
  Hrísey: {
    name: 'Hrísey',
    city: 'Hrísey',
  },
  Miðhúsaskógur: {
    name: 'Miðhúsaskógur',
    city: 'Laugarvatn',
  },
  Ævintýragarðurinn: {
    name: 'Ævintýragarðurinn',
    city: 'Mosfellsbær',
  },
  Neskaupsstaður: {
    name: 'Neskaupsstaður',
    city: 'Neskaupsstaður',
  },
  Rómantískasvæðið: {
    name: 'Rómantískasvæðið',
    city: 'Reykjanesbær',
  },
  'Fella- og Hólahverfi': {
    name: 'Fella- og Hólahverfi',
    city: 'Breiðholt',
  },
  Fossvogsdalur: {
    name: 'Fossvogsdalur',
    city: 'Reykjavík',
  },
  Gufunes: {
    name: 'Gufunes',
    city: 'Grafarvogur',
  },
  Laugardalur: {
    name: 'Laugardalur',
    city: 'Reykjavík',
  },
  Seljahverfi: {
    name: 'Seljahverfi',
    city: 'Breiðholt',
  },
  Valhúsahæð: {
    name: 'Valhúsahæð',
    city: 'Seltjarnarnes',
  },
  Úlfljótsvatn: {
    name: 'Úlfljótsvatn',
    city: 'Úlfljótsvatn',
  },
  Vestmannaeyjar: {
    name: 'Vestmannaeyjar',
    city: 'Vestmannaeyjar',
  },
  Klambratún: {
    name: 'Klambratún',
    city: 'Reykjavík',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [
      {
        number: 1,
        teePads: {
          red: {
            par: 3,
            location: null,
          },
        },
      },
      {
        number: 2,
        teePads: {
          red: {
            par: 3,
            location: null,
          },
        },
      },
      {
        number: 3,
        teePads: {
          red: {
            par: 4,
            location: null,
          },
        },
      },
      {
        number: 4,
        teePads: {
          red: {
            par: 3,
            location: null,
          },
        },
      },
      {
        number: 5,
        teePads: {
          red: {
            par: 4,
            location: null,
          },
        },
      },
      {
        number: 6,
        teePads: {
          red: {
            par: 5,
            location: null,
          },
        },
      },
      {
        number: 7,
        teePads: {
          red: {
            par: 4,
            location: null,
          },
        },
      },
      {
        number: 8,
        teePads: {
          red: {
            par: 3,
            location: null,
          },
        },
      },
      {
        number: 9,
        teePads: {
          red: {
            par: 4,
            location: null,
          },
        },
      },
    ],
  },
})

export const getCourses = (): Array<{[key: string]: Course}> => {
  const coursesList = courses.map((v: Map<string, any>, k) => {
    return v.set('name', _.capitalize(k))
  })
  return coursesList.toList().sortBy((v) => v.get('city')).toJS()
}

export const getCourse = (course: String): Course => {
  return courses.get(course.toLowerCase()) &&
    courses.get(course.toLowerCase()).set('name', _.capitalize(course)).toJS()
}
