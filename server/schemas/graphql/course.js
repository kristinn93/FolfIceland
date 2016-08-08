import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} from 'graphql'

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
    location: {type: coordinateType},
    baskets: {type: new GraphQLList(basketType)},
  },
})

export default {
  type: courseType,
  resolve: async () => {
    return {}
  },
}
