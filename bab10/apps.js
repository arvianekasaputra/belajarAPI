Vue.component('tebal', {
  template: '<b>Tulisan ini berasal dari component</b>'
});
Vue.component('tebal2', {
  template: '<b><slot></slot></b>'
});
Vue.component('multi', {
  template: `
    <div>
      <b>kalimat ini berhuruf tebal</b><br>
      <i>kalimat ini berhuruf miring</i><br>
      <u>kalimat ini bergaris bawah</u>
    </div>
    `
});
Vue.component('daftar', {
  template: '<div><siswa v-for="s in daftarsiswa">{{ s.nama }} kelas {{ s.kelas }}</siswa></div>',
  data: function () {
    return {
      daftarsiswa: [
        {nama: 'Arvian', kelas: 'TI'},
        {nama: 'Eka', kelas: 'SI'},
        {nama: 'Saputra', kelas: 'MI'}
      ]
    }
  }
});
Vue.component('karya', {
  props: ['judul','isi'],
  template: '<div><h2>{{ judul }}</h2><p>{{ isi }}</p></div>'
});
Vue.component('siswa', {
  template: '<li><slot></slot></li>'
});
Vue.component('tes', {
  props: ['nilai','nilai2'],
  template: '<div><b>{{ nilai }}</b> dengan <b>{{ nilai2 }}</b></div>'
});
Vue.component('nama', {
  template: '<input type="text" placeholder="Masukkan nama" @blur = "validasi"></input>',
  methods: {
    validasi() {
      this.$emit('applied')
    }
  }
});
Vue.component('kendaraans', {
  template: `
  <div class="bg-light mx-auto">
    <h1 v-if="tampiljudul" class="text-center bg-dark text-light">Pilih Hadiah Anda!</h1>
    <isi v-for="(kd, index) in kendaraan" v-if="tampilpilihan" class="d-flex justify-content-between col-4 mx-auto m-2">
      {{ kd.jenis }}
      <button @click="klik(index)" v-if="tampilalert" class="btn btn-success">pilih</button>
    </isi>
    <h1 v-if="tampilhasil" class="alert alert-success">Ambil Hadiah Anda di dealer!</h1>
  </div>
  `,
  data: function () {
    return {
      kendaraan: [{jenis: 'mobil'},{jenis: 'motor'},{jenis: 'pesawat'}],
      tampilalert: true,
      tampilpilihan: true,
      tampiljudul: true,
      tampilhasil: false
    }
  },
  methods: {
    klik(index) {
      alert('Selamat Anda Mendapatkan ' + this.kendaraan[index].jenis);
      this.tampilalert = false,
      this.tampilpilihan = false,
      this.tampiljudul = false,
      this.tampilhasil = true
    }
  }
});
Vue.component('isi', {
  template: '<li><slot></slot></li>'
});
var app = new Vue({
  el: '#app',
  data: {
    pesan: 'belajar vue.JS',
    pesan2: 'semangat Arvian',
    valid: false,
  },
  methods: {
    validasi() {
      this.valid = true;
    }
  }
});