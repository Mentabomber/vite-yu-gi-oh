<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoader from './components/AppLoader.vue';


export default{
  components: {
    AppHeader,
    AppMain,
    AppLoader
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
        store.loading = false
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
  <AppLoader v-if="store.loading"/>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" >

</style>
