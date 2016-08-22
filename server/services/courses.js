import _ from 'lodash'
import {Map, fromJS} from 'immutable'
import type {Course} from '../schemas/flow/course'

const courses: Map<string, Course> = fromJS({
  Garðalundur: {
    name: 'Garðalundur',
    city: 'Akranes',
    location: {
      lat: 64.321683,
      long: -22.037017,
    },
    baskets: [
      {
        number: 1,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.322712,
              long: -22.033293,
            },
          },
          white: {
            par: 3,
            location: {
              lat: 64.322833,
              long: -22.033529,
            },
          },
        },
        location: {
          lat: 64.322534,
          long: -22.032999,
        },
      },
      {
        number: 2,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.322392,
              long: -22.032142,
            },
          },
          white: {
            par: 3,
            location: {
              lat: 64.322523,
              long: -22.032344,
            },
          },
        },
        location: {
          lat: 64.322237,
          long: -22.032087,
        },
      },
      {
        number: 3,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.322742,
              long: -22.031178,
            },
          },
          white: {
            par: 3,
            location: {
              lat: 64.322609,
              long: -22.031348,
            },
          },
        },
        location: {
          lat: 64.322903,
          long: -22.030806,
        },
      },
      {
        number: 4,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.323534,
              long: -22.031352,
            },
          },
          white: {
            par: 3,
            location: {
              lat: 64.323450,
              long: -22.031098,
            },
          },
        },
        location: {
          lat: 64.323540,
          long: -22.031732,
        },
      },
      {
        number: 5,
        teePads: {
          red: {
            par: 4,
            location: {
              lat: 64.323281,
              long: -22.032141,
            },
          },
          white: {
            par: 4,
            location: {
              lat: 64.323602,
              long: -22.032039,
            },
          },
        },
        location: {
          lat: 64.322914,
          long: -22.032441,
        },
      },
      {
        number: 6,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.322801,
              long: -22.032174,
            },
          },
          white: {
            par: 3,
            location: {
              lat: 64.322715,
              long: -22.031855,
            },
          },
        },
        location: {
          lat: 64.322762,
          long: -22.032950,
        },
      },
      {
        number: 7,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.323109,
              long: -22.032631,
            },
          },
          white: {
            par: 3,
            location: {
              lat: 64.323005,
              long: -22.032451,
            },
          },
        },
        location: {
          lat: 64.323395,
          long: -22.033025,
        },
      },
      {
        number: 8,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.323789,
              long: -22.033412,
            },
          },
          white: {
            par: 4,
            location: {
              lat: 64.323492,
              long: -22.033598,
            },
          },
        },
        location: {
          lat: 64.323740,
          long: -22.032954,
        },
      },
      {
        number: 9,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.323417,
              long: -22.034326,
            },
          },
          white: {
            par: 3,
            location: {
              lat: 64.323572,
              long: -22.033908,
            },
          },
        },
        location: {
          lat: 64.323033,
          long: -22.034356,
        },
      },
    ],
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
            location: {
              lat: 64.1383651039229,
              long: -21.9153169915284,
            },
          },
        },
        location: {
          lat: 64.1379321786241,
          long: -21.9160319678689,
        },
      },
      {
        number: 2,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.1380611761139,
              long: -21.9163826666976,
            },
          },
        },
        location: {
          lat: 64.1375940945597,
          long: -21.9164402503724,
        },
      },
      {
        number: 3,
        teePads: {
          red: {
            par: 4,
            location: {
              lat: 64.1373931803407,
              long: -21.9164757896419,
            },
          },
        },
        location: {
          lat: 64.1370093729944,
          long: -21.9172190968151,
        },
      },
      {
        number: 4,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.1366753122435,
              long: -21.9165239017661,
            },
          },
        },
        location: {
          lat: 64.1362757888289,
          long: -21.9164798129554,
        },
      },
      {
        number: 5,
        teePads: {
          red: {
            par: 4,
            location: {
              lat: 64.1362662334592,
              long: -21.915754526874,
            },
          },
        },
        location: {
          lat: 64.1361306561754,
          long: -21.9144232291932,
        },
      },
      {
        number: 6,
        teePads: {
          red: {
            par: 5,
            location: {
              lat: 64.1362580191941,
              long: -21.9129062723572,
            },
          },
        },
        location: {
          lat: 64.1368322633804,
          long: -21.911335671341,
        },
      },
      {
        number: 7,
        teePads: {
          red: {
            par: 4,
            location: {
              lat: 64.1369630210699,
              long: -21.9108883291687,
            },
          },
        },
        location: {
          lat: 64.1369349416943,
          long: -21.9095059018786,
        },
      },
      {
        number: 8,
        teePads: {
          red: {
            par: 3,
            location: {
              lat: 64.1372823296712,
              long: -21.9092913251574,
            },
          },
        },
        location: {
          lat: 64.1370561021046,
          long: -21.9103489536996,
        },
      },
      {
        number: 9,
        teePads: {
          red: {
            par: 4,
            location: {
              lat: 64.1372765880675,
              long: -21.9104863330926,
            },
          },
        },
        location: {
          lat: 64.1375145502986,
          long: -21.9120596163179,
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
