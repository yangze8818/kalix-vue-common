import Address from './address'
import AddressAdd from './addressAdd'
import AddressEdit from './addressEdit'
import AddressSearch from './addressSearch'
import AddressView from './addressView'
import GroupAdd from './groupAdd'
import GroupEdit from './groupEdit'

const components = [
  Address, AddressAdd, AddressEdit, AddressSearch, AddressView, GroupAdd, GroupEdit
]

const main = {
  install(Vue) {
    components.map((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default main
