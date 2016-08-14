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

const courseType = new GraphQLObjectType({
  name: 'Course',
  fields: {
    name: {type: GraphQLString},
    location: {type: coordinateType},
    baskets: {type: new GraphQLList(basketType)},
  },
})

const coursesType = new GraphQLList(courseType)
const folfType = new GraphQLObjectType({
  name: 'Folf',
  fields: {
    courses: {
      type: coursesType,
      args: {
        query: {type: GraphQLString},
      },
      resolve: (_: any, args: {query: string}) => {
        return getCourses(args.query)
      },
    },
  },
})

export const folf = {
  type: folfType,
  resolve: () => {
    return {
      courses: [],
    }
  },
}

export const course = {
  type: courseType,
  args: {
    name: {type: GraphQLString},
  },
  resolve: (_: any, args: {name: string}) => {
    console.log(args)
    return getCourse(args.name)
  },
}
