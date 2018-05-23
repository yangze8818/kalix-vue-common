import Note from './note'
import NoteAdd from './noteAdd'
import NotePreview from './notePreview'
import NoteSearch from './noteSearch'
import NoteView from './noteView'

const components = [
  Note, NoteAdd, NotePreview, NoteSearch, NoteView
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
