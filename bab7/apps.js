var app = new Vue({
  el: '#app',
  data: {
    pesan: '',
    print: '',
    tampak: false,
    tampak2: true,
  },
  methods: {
    pesan2: function () {
      alert('Belajar penggunaan event click+method')
    },
    pesan3: function (isi) {
      alert(isi)
    },
    enter: function () {this.print='Anda tekan enter'},
    space: function () {this.print='Anda tekan spasi'},
    esc: function () {this.print='Anda tekan esc'},
    up: function () {this.print='Anda tekan arah atas'},
    down: function () {this.print='Anda tekan arah bawah'},
    right: function () {this.print='Anda tekan arah kanan'},
    left: function () {this.print='Anda tekan arah kiri'},
    pesan4: function () {this.print='Anda tekan ctrl+x'},
    mouseleft: function () {this.print='Anda tekan kiri pada mouse'}
  }
});