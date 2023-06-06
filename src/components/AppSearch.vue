<script>

import { store } from '../store.js';
import axios from 'axios';


export default{
    name: "AppSearch",
    data(){
    return{
      store,
    }
  },
  methods: {
    resetSearch(){
      store.searchText = "";
      this.$emit('search');
    },
    getArchetypes(){

      let myUrl = store.apiArchetypes;

      axios.get(myUrl)
      .then((res) => {
        store.archetypesList = res.data;
        store.loading = false;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      }
  },
  created(){
    this.getArchetypes();
    
  }
    
}
</script>

<template>
  <div class="container mb-3">
    <div class="row">
      <div class="col-12">
        <form action="" class="row g-3 justify-content-center">
          <!-- <div class="col-auto">
            <label for="search-cards" class="visually-hidden">Search cards</label>
            <input type="text" class="form-control" id="search-card" placeholder="Search card" 
              v-model.trim="store.searchText">
          </div> -->
          <div class="col-auto">
            <div class="row">
              <!-- <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-2" @click.prevent="$emit('search')">Search</button>
              </div> -->
              <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-2" @click.prevent="resetSearch">Reset</button>
              </div>
              <div>
                <select v-model="store.searchText" name="cards" id="cards" @change="$emit('search') ">
                  <option v-for="(type) in store.archetypesList"  > {{ type.archetype_name }} </option>
                  <pre>{{ type }}</pre>
                  <!-- v-model="store.searchText" -->
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>
