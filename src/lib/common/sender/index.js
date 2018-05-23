import Sender from './sender'
import SenderSearch from './senderSearch'
import SenderView from './senderView'

const components = [
  Sender, SenderSearch, SenderView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
