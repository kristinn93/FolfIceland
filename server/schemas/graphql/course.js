import _ from 'lodash'
import {
  GraphQLFloat,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import {getCourse, getCourses} from '../../services/courses'

const coordinateType = new GraphQLObjectType({
  name: 'Coordinates',
  fields: {
    lat: {type: GraphQLFloat},
    long: {type: GraphQLFloat},
  },
})

const teePadType = new GraphQLObjectType({
  name: 'TeePad',
  fields: {
    par: {type: GraphQLInt},
    location: {type: coordinateType},
  },
})

const teePadsType = new GraphQLObjectType({
  name: 'TeePads',
  fields: {
    red: {type: teePadType},
    white: {type: teePadType},
    blue: {type: teePadType},
  },
})

const basketType = new GraphQLObjectType({
  name: 'Basket',
  fields: {
    number: {type: GraphQLInt},
    teePads: {type: teePadsType},
    location: {type: coordinateType},
  },
})

const parType = new GraphQLObjectType({
  name: 'Par',
  fields: {
    red: {type: GraphQLInt},
    white: {type: GraphQLInt},
    blue: {type: GraphQLInt},
  },
})

const courseType = new GraphQLObjectType({
  name: 'Course',
  fields: {
    name: {type: GraphQLString},
    city: {type: GraphQLString},
    numberOfBaskets: {
      type: GraphQLInt,
      resolve: (course) => {
        return course.baskets.length
      },
    },
    par: {
      type: parType,
      resolve: (course) => {
        return {
          red: _.sum(_.flattenDeep(course.baskets.map((basket) => {
            const redTeePad = basket.teePads.red
            return redTeePad && redTeePad.par
          }))),
          white: _.sum(_.flattenDeep(course.baskets.map((basket) => {
            const whiteTeePad = basket.teePads.white
            return whiteTeePad && whiteTeePad.par
          }))),
          blue: _.sum(_.flattenDeep(course.baskets.map((basket) => {
            const blueTeePad = basket.teePads.blue
            return blueTeePad && blueTeePad.par
          }))),
        }
      },
    },
    location: {type: coordinateType},
    baskets: {type: new GraphQLList(basketType)},
  },
})

const coursesType = new GraphQLList(courseType)
const folfType = new GraphQLObjectType({
  name: 'Folf',
  fields: {
    courses: {type: coursesType},
  },
})

export const folf = {
  type: folfType,
  resolve: () => {
    return {
      courses: getCourses(),
    }
  },
}

export const course = {
  type: courseType,
  args: {
    name: {type: GraphQLString},
  },
  resolve: (__: any, args: {name: string}) => {
    return getCourse(args.name)
  },
}
