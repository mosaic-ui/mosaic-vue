import './styles/index.scss'

import MoButtonBase from './components/Button/Base/ButtonBase.vue'
import MoButton from './components/Button/Composed/Button.vue'

const components = [
  MoButtonBase,
  MoButton
]

const install = function(Vue, opts = {}) {
  components.forEach(function(component) {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install,
  MoButtonBase,
  MoButton,
}