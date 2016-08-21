import _ from 'lodash'
import {Map, fromJS} from 'immutable'
import type {Course} from '../schemas/flow/course'

const courses: Map<string, Course> = fromJS({
  Garðalundur: {
    name: 'Garðalundur',
    city: 'Akranes',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Eiðsvöllur: {
    name: 'Eiðsvöllur',
    city: 'Akureyri',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Glerárskóli: {
    name: 'Glerárskóli',
    city: 'Akureyri',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Hamrakotstún: {
    name: 'Hamrakotstún',
    city: 'Akureyri',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Hamrar: {
    name: 'Hamrar',
    city: 'Akureyri',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Apavatn: {
    name: 'Apavatn',
    city: 'Laugarvatn',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Bifröst: {
    name: 'Bifröst',
    city: 'Bifröst',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Bolungarvík: {
    name: 'Bolungarvík',
    city: 'Bolungarvík',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Tjarnargarðurinn: {
    name: 'Tjarnargarðurinn',
    city: 'Egilsstaðir',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Flateyri: {
    name: 'Flateyri',
    city: 'Flateyri',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Flúðir: {
    name: 'Flúðir',
    city: 'Flúðir',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Víðistaðatún: {
    name: 'Víðistaðatún',
    city: 'Hafnafjörður',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Hrísey: {
    name: 'Hrísey',
    city: 'Hrísey',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Miðhúsaskógur: {
    name: 'Miðhúsaskógur',
    city: 'Laugarvatn',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Ævintýragarðurinn: {
    name: 'Ævintýragarðurinn',
    city: 'Mosfellsbær',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Neskaupsstaður: {
    name: 'Neskaupsstaður',
    city: 'Neskaupsstaður',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Rómantískasvæðið: {
    name: 'Rómantískasvæðið',
    city: 'Reykjanesbær',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  'Fella- og Hólahverfi': {
    name: 'Fella- og Hólahverfi',
    city: 'Breiðholt',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Fossvogsdalur: {
    name: 'Fossvogsdalur',
    city: 'Reykjavík',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Gufunes: {
    name: 'Gufunes',
    city: 'Grafarvogur',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Laugardalur: {
    name: 'Laugardalur',
    city: 'Reykjavík',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Seljahverfi: {
    name: 'Seljahverfi',
    city: 'Breiðholt',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Valhúsahæð: {
    name: 'Valhúsahæð',
    city: 'Seltjarnarnes',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Úlfljótsvatn: {
    name: 'Úlfljótsvatn',
    city: 'Úlfljótsvatn',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
  },
  Vestmannaeyjar: {
    name: 'Vestmannaeyjar',
    city: 'Vestmannaeyjar',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
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
  return courses.toList().sortBy((v) => v.get('city')).toJS()
}

export const getCourse = (course: String): Course => {
  return courses.get(course) &&
    courses.get(course).toJS()
}
