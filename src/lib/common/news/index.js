import News from './news'
import NewsAdd from './newsAdd'
import NewsSearch from './newsSearch'
import NewsView from './newsView'

const components = [
  News, NewsAdd, NewsSearch, NewsView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
