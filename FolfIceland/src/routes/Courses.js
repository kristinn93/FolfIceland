/* @flow */
/* eslint-ignore no-undef */
import Relay, {Route} from 'react-relay'

export default class CoursesRoute extends Route {
  static queries = {
    courses: () => Relay.QL`query { folf }`,
  }
  static routeName = 'CoursesRoute'
}
