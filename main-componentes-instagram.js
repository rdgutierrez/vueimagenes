
Vue.component('mis-instantaneas', {
  //props: ['users'], OJO NO SE USA PROPS PARA LA VARIABLE YA QUE ESTA EN DATA
  template: '<div class="col-md-3" ></div>',
  mounted(){
      this.cargarImagenes();
  },
  data() {
    return {
      instantaneas: [],
      APP_ID: '4878509013838350045',
      APP_SECRET: 'b5bdfb83802accec1fdcd952393312e5c52231792bd94771d1a218615c859970',
      ACCESS_TOKEN: 'AW5ls5y28hK63cTAHiUKhvkC1C6UFJ6wx3L7t-VDv8ou6kApeAAAAAA'
    }
  },
  methods: {
    cargarImagenes(){

      axios.get('https://api.pinterest.com/v1/boards/Tarkiopaulino/robots/pins/?access_token=ATjTZWhnItoRsS4EaYNKQ_yiM-luFJ6yI5O1FnpDv8ou6kApeAAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cmedia')
      .then((respuesta) => {
        console.log(respuesta);
        this.instantaneas = respuesta.data.data;
        console.log(this.instantaneas);
        });
    },
  }
})

new Vue({
  el: 'main',
});
