<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';


export default{
  components: {
    AppHeader,
    AppMain
  },
  data(){
    return{
      store,
    }
  },
  methods: {
    getCharacters(){
      axios.get(store.apiURL)
      .then((res) => {
        store.cardsList = res.data.data;
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  created(){
    this.getCharacters();
  }
}
</script>

<template>
  <pre>{{ cardsList }}</pre>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" >

</style>
