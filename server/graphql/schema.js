import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql'

import courses from '../schemas/graphql/course'

export default () => {
  const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'FolfIceland',
      fields: {
        courses,
      },
    }),
  })
  return schema
}
