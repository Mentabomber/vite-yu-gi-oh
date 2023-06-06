<script>
import { store } from './store.js';
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppLoader from './components/AppLoader.vue';
import AppSearch from './components/AppSearch.vue';


export default{
  components: {
    AppHeader,
    AppMain,
    AppLoader,
    AppSearch
  },
  data(){
    return{
      store,
    }
  },
  methods: {
    getCards(){

      let myUrl = store.apiURL;
  

      if(store.searchText === ""){
        myUrl += "?num=39&offset=0";
        axios.get(myUrl)
          .then((res) => {
            store.cardsList = res.data.data;
            store.loading = false;
            console.log(res.data.data);
            console.log(store.searchText);
          })
          .catch(err => {
            console.log(err);
          })
      }
      else{
        myUrl += `?${store.apiArchetypeParameter}=${store.searchText}`;
        console.log(myUrl);
        
          axios.get(myUrl)
            .then((res) => {
              store.cardsList = res.data.data;
              store.loading = false;
              console.log(res.data.data);
              console.log(store.searchText);
            })
            .catch(err => {
              console.log(err);
            })
    }
  },
  created(){
    console.log("son qua");
    this.getCards();
  }
}}
</script>

<template>
  <AppLoader v-if="store.loading"/>
  <!-- <div v-else> -->
    <AppHeader />
    <AppMain :apiResolver="getCards"/>
  <!-- </div> -->
 
</template>

<style lang="scss" >

</style>
