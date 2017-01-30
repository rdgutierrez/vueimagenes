
Vue.component('mis-instantaneas', {
  //props: ['users'], OJO NO SE USA PROPS PARA LA VARIABLE YA QUE ESTA EN DATA
  template: '<div class="col-md-3" v-for="imagen in instantaneas"><img :src="{{ imagen. }}"> </div>',
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

      axios.get('https://api.instagram.com/v1/users/25025320/media/recent/??client_id=32474157718f4855873310582c9cf6b0&callback=?')
      .then((respuesta) => {
        console.log(respuesta);
        this.instantaneas = respuesta.data;
        console.log(this.instantaneas);
        });
    },
  }
})

new Vue({
  el: 'main',
});
