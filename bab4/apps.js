new Vue({
    el: '#app',
    data: {
      bil1: 16,
      bil2: 4,
      jumlah: 0,
      bagi: 0,
      isi: '',
      isi2: '',
      keterangan: '',
      tampil: false,
    },
    computed: {
      kurang: function(){
        return this.bil1 - this.bil2
      },
      kali: function(){
        return this.bil1 * this.bil2
      }
    },
    methods: {
      diproses(){
        this.jumlah = this.bil1 + this.bil2
        this.bagi = this.bil1 / this.bil2
      },
      ketik: function(){
        if (this.isi2 == this.isi) {
          this.keterangan = '<i class="text-success">password sama silahkan dilanjutkan</i>'
          this.tampil = true
        } else {
          this.keterangan = '<i class="text-danger">password tidak sama</i>'
          this.tampil = false
        }
      }
    },
    watch: {
      isi2: 'ketik'
    }
})