import CommonDict from './commondict'

const components = [
  CommonDict
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
