import Address from '../lib/common/address'
import CommonDict from '../lib/common/commondict'
import Easemobt from '../lib/common/easemob'
import News from '../lib/common/news'
import Note from '../lib/common/note'
import Receiver from '../lib/common/receiver'
import Sender from '../lib/common/sender'

const components = {
  install(Vue) {
    Address.install(Vue)
    CommonDict.install(Vue)
    Easemobt.install(Vue)
    News.install(Vue)
    Note.install(Vue)
    Receiver.install(Vue)
    Sender.install(Vue)
  }
}

export default components
