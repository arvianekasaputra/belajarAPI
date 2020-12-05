var app = new Vue({
  el: '#app',
  data: {
    pesan: 'beLajaR vUe.JS',
  },
  filters: {
    kapital(value){
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    },
    kecil(value){
      if (!value) return ''
      value = value.toString()
      return value.toLowerCase()
    },
    terbalik(value){
      if (!value) return ''
      value = value.toString()
      return value.split('').reverse().join('')
    },
    terbalik2(value){
      if (!value) return ''
      value = value.toString()
      return value.split(' ').reverse().join(' ')
    },
    capitalize: function (value) {
      if (!value) return ' '
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
});