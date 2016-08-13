import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql'

import folf from '../schemas/graphql/course'

export default () => {
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'FolfIceland',
      fields: {
        folf,
      },
    }),
  })
  return schema
}
