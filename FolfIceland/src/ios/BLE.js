import {DeviceEventEmitter} from 'react-native'
import Discovery from 'react-native-discovery'
const discoveryUUID = '80dbd6ce-4f4c-4d90-a7ec-eea8a138e830'

Discovery.initialize(
  discoveryUUID,
  'KristinnSexy'
)

Discovery.setShouldAdvertise(true)
Discovery.setShouldDiscover(true)

DeviceEventEmitter.addListener(
  'discoveredUsers',
  (data) => {
    if (data.didChange || data.usersChanged) {
      // slight callback discrepancy between the iOS and Android libraries
      console.log('Found users')
      console.log(data.users)
    }
  }
)

// Listen for bluetooth state changes
DeviceEventEmitter.addListener(
  'bleStateChanged',
  (event) => {
    console.log('BLE is on: ')
    console.log(event.isOn)
  }
)

export default () => Discovery
