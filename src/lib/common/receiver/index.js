import Receiver from './receiver'
import ReceiverAdd from './receiverAdd'
import ReceiverView from './receiverView'
import ReceiverSearch from './receiverSearch'

const components = [
  Receiver,
  ReceiverAdd,
  ReceiverView,
  ReceiverSearch
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
