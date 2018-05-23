import Easemob from './easemob'

const components = [
  Easemob
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
