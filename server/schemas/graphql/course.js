import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from 'graphql'

import {getCourses, getCourse} from '../../services/courses'

const coordinateType = new GraphQLObjectType({
  name: 'coordinates',
  fields: {
    lat: {type: GraphQLInt},
    long: {type: GraphQLInt},
  },
})

const teePadType = new GraphQLObjectType({
  name: 'teePad',
  fields: {
    par: {type: GraphQLInt},
    location: {type: coordinateType},
  },
})

const teePadsType = new GraphQLObjectType({
  name: 'teePads',
  fields: {
    red: {type: teePadType},
    white: {type: teePadType},
    blue: {type: teePadType},
  },
})

const basketType = new GraphQLObjectType({
  name: 'basket',
  fields: {
    number: {type: GraphQLInt},
    teePads: {type: teePadsType},
    location: {type: coordinateType},
  },
})

const courseType = new GraphQLObjectType({
  name: 'course',
  fields: {
    name: {type: GraphQLString},
    location: {type: coordinateType},
    baskets: {type: new GraphQLList(basketType)},
  },
})

const coursesType = new GraphQLList(courseType)

export default {
  type: coursesType,
  args: {
    query: {type: GraphQLString},
  },
  resolve: async (_, args) => {
    console.log(args)
    if (args.query) {
      return getCourse(args.query)
    }
    return getCourses()
  },
}
