var app = new Vue({
  el: '#app',
  data: {
    array: ['Arvian','Eka','Saputra'],
    array2: [
      {manual: true, merk: 'yamaha', tipe: 'byson', stok:true},
      {manual: false, merk: 'honda', tipe: 'vario', stok:false},
      {manual: true, merk: 'suzuki', tipe: 'shogun', stok:true},
      {manual: false, merk: 'yamaha', tipe: 'nmax', stok:false},
      {manual: true, merk: 'honda', tipe: 'cbr150r', stok:true},
      {manual: false, merk: 'suzuki', tipe: 'nex', stok:false}
    ],
    isi: '',
    x: '',
    cari: '',
  },
  methods: {
    tambah: function () {
      this.array.push(this.isi)
      this.isi = ''
    },
    hapus (index) {
      this.array.splice(index,1)
    }
  },
  computed: {
    motorManual () {
      return this.array2.filter(arr3 => arr3.manual)
    },
    motorMatic () {
      return this.array2.filter(arr4 => !arr4.manual)
    },
    filterMerk: function () {
      return this.array2.filter((arr5) => {return arr5.merk.match(this.cari)})
    }
  }
});