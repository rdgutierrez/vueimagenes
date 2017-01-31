
Vue.component('mis-instantaneas', {
  //props: ['users'], OJO NO SE USA PROPS PARA LA VARIABLE YA QUE ESTA EN DATA
  template: '<div class="row"><div class="col-md-3" v-for="imagen in instantaneas"><div class="panel panel-default" ><h1>{{ imagen.note }}</h1><div class="panel-heading"></div><div class="panel-body"><img :src="imagen.image.original.url" width="100%" heigth="auto"/></div></div></div></div>',
  mounted(){
      this.cargarImagenes();
  },
  data() {
    return {
      instantaneas: []
    }
  },
  methods: {
    cargarImagenes(){
      axios.get('https://api.pinterest.com/v1/boards/Tarkiopaulino/robots/pins/?access_token=ATjTZWhnItoRsS4EaYNKQ_yiM-luFJ6yI5O1FnpDv8ou6kApeAAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cmedia')
      .then((respuesta) => {
        console.log('listo');
        this.instantaneas = respuesta.data.data;
        console.log(this.instantaneas);
        });
    },
  }
})

new Vue({
  el: 'main',
});
