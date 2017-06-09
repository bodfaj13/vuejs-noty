import Noty from 'noty'

const defaults = {
  layout: 'topRight',
  theme: 'mint',
  timeout: 5000,
  progressBar: true,
  closeWith: ['click'],
}

const VueNoty = {
  options: {},

  setOptions (opts) {
    this.options = Object.assign({}, defaults, opts)
    return this
  },

  show (text, type = 'alert') {
    const params = Object.assign({}, this.options, {
      type,
      text
    })

    new Noty(params).show()
  },

  success (text) {
    this.show(text, 'success')
  },

  error (text) {
    this.show(text, 'error')
  },

  warning (text) {
    this.show(text, 'warning')
  },

  info (text) {
    this.show(text, 'info')
  }
}

export default {
  install: function (Vue, opts) {
    Vue.prototype.$noty = VueNoty.setOptions(opts)
  }
}
