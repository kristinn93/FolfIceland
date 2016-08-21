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
    baskets: [],
  },
  Eiðsvöllur: {
    name: 'Eiðsvöllur',
    city: 'Akureyri',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Glerárskóli: {
    name: 'Glerárskóli',
    city: 'Akureyri',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Hamrakotstún: {
    name: 'Hamrakotstún',
    city: 'Akureyri',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Hamrar: {
    name: 'Hamrar',
    city: 'Akureyri',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Apavatn: {
    name: 'Apavatn',
    city: 'Laugarvatn',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Bifröst: {
    name: 'Bifröst',
    city: 'Bifröst',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Bolungarvík: {
    name: 'Bolungarvík',
    city: 'Bolungarvík',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Tjarnargarðurinn: {
    name: 'Tjarnargarðurinn',
    city: 'Egilsstaðir',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Flateyri: {
    name: 'Flateyri',
    city: 'Flateyri',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Flúðir: {
    name: 'Flúðir',
    city: 'Flúðir',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Víðistaðatún: {
    name: 'Víðistaðatún',
    city: 'Hafnafjörður',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Hrísey: {
    name: 'Hrísey',
    city: 'Hrísey',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Miðhúsaskógur: {
    name: 'Miðhúsaskógur',
    city: 'Laugarvatn',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Ævintýragarðurinn: {
    name: 'Ævintýragarðurinn',
    city: 'Mosfellsbær',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Neskaupsstaður: {
    name: 'Neskaupsstaður',
    city: 'Neskaupsstaður',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Rómantískasvæðið: {
    name: 'Rómantískasvæðið',
    city: 'Reykjanesbær',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  'Fella- og Hólahverfi': {
    name: 'Fella- og Hólahverfi',
    city: 'Breiðholt',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Fossvogsdalur: {
    name: 'Fossvogsdalur',
    city: 'Reykjavík',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Gufunes: {
    name: 'Gufunes',
    city: 'Grafarvogur',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Laugardalur: {
    name: 'Laugardalur',
    city: 'Reykjavík',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Seljahverfi: {
    name: 'Seljahverfi',
    city: 'Breiðholt',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Valhúsahæð: {
    name: 'Valhúsahæð',
    city: 'Seltjarnarnes',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Úlfljótsvatn: {
    name: 'Úlfljótsvatn',
    city: 'Úlfljótsvatn',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
  },
  Vestmannaeyjar: {
    name: 'Vestmannaeyjar',
    city: 'Vestmannaeyjar',
    location: {
      lat: 64.138409,
      long: -21.915763,
    },
    baskets: [],
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
