/* @flow */
import Relay, {DefaultNetworkLayer} from 'react-relay'

export default () => {
  Relay.injectNetworkLayer(new DefaultNetworkLayer('http://localhost:3000/graphql'))
}
