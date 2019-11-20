import './styles/index.scss'

import ButtonBase from './components/Button/Base/ButtonBase.vue'

const components = [
  ButtonBase
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
  ButtonBase
}