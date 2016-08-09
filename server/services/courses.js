import {Map, List} from 'immutable'
import type {Course} from '../schemas/flow/course'

const courses: Map<string, Course> = Map({
  klambratun: Map({
    location: Map({
      lat: 64.138409,
      long: -21.915763,
    }),
    baskets: List([
      Map({
        number: 1,
        teePads: Map({
          red: Map({
            par: 3,
            location: null,
          }),
        }),
      }),
      Map({
        number: 2,
        teePads: Map({
          red: Map({
            par: 3,
            location: null,
          }),
        }),
      }),
      Map({
        number: 3,
        teePads: Map({
          red: Map({
            par: 4,
            location: null,
          }),
        }),
      }),
      Map({
        number: 4,
        teePads: Map({
          red: Map({
            par: 3,
            location: null,
          }),
        }),
      }),
      Map({
        number: 5,
        teePads: Map({
          red: Map({
            par: 4,
            location: null,
          }),
        }),
      }),
      Map({
        number: 6,
        teePads: Map({
          red: Map({
            par: 5,
            location: null,
          }),
        }),
      }),
      Map({
        number: 7,
        teePads: Map({
          red: Map({
            par: 4,
            location: null,
          }),
        }),
      }),
      Map({
        number: 8,
        teePads: Map({
          red: Map({
            par: 3,
            location: null,
          }),
        }),
      }),
      Map({
        number: 9,
        teePads: Map({
          red: Map({
            par: 4,
            location: null,
          }),
        }),
      }),
    ]),
  }),
})

export const getCourses = (): Array<{[key: string]: Course}> => {
  const coursesList = courses.map((v, k) => {
    return v.set('name', k)
  })
  return coursesList.toList().toJS()
}

export const getCourse = (course): Array<Course> => {
  if (courses.has(course)) {
    return [courses.get(course).set('name', course).toJS()]
  }
  return []
}
