<script>

import { store } from '../store.js';

import AppMainCard from './AppMainCard.vue';
import AppSearch from './AppSearch.vue';


export default{
    name: "AppMain",
    components: {
        AppMainCard,
        AppSearch,
    },
    props: {
        apiResolver: Function
    },
    data(){
    return{
      store,
    }
  }
}
</script>

<template>
<main>
    <div class="container">
        <AppSearch @search="apiResolver"/>
        <div id="card-container">
            <header>
                <h3>Found {{ store.cardsList.length }} cards</h3>
            </header>
            <AppMainCard v-for="card in store.cardsList"
            :details="card" />
        </div>
    </div>
</main>
</template>

<style lang="scss" scoped>
main{

    header{
        background-color: black;
        color: white;
        width: 100%;
        padding: 20px;
        margin-top: 40px;
    }
    background-color: rgb(212,143,56);
    .container {
        
        width: 1180px;
        margin: auto;
        #card-container{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0 40px;
            background-color: white;
            width: 100%;
            height: 100%;
        }

        select {
            margin: 25px 0;
            padding: 10px;
            padding-right: 100px;
            padding-left: 5px;
            font-size: 20px;
            border-radius: 10px;
            border: none;
        }
    }
}
</style>
