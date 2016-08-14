import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql'

import {folf, course} from '../schemas/graphql/course'

export default () => {
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'FolfIceland',
      fields: {
        folf,
        course,
      },
    }),
  })
  return schema
}
