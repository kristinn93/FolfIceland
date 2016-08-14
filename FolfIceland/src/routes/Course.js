/* @flow */
/* eslint-ignore no-undef */
import Relay, {Route} from 'react-relay'

export default class CourseRoute extends Route {
  static paramDefinitions = {
    // By setting `required` to true, `ProfileRoute` will throw if a `userID`
    // is not supplied when instantiated.
    query: {required: true},
  }
  static queries = {
    course: () => Relay.QL`query { course(name: $query) }`,
  }
  static routeName = 'CourseRoute'
}
