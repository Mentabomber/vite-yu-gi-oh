<script>
import AppMainCards from './components/AppMainCards.vue';

export default{
    name: "AppMain",
    components: {
        AppMainCards
    }
}
</script>

<template>
<main>
    <div class="container">
        <select name="cards" id="cards">
            <option value="Alien">Alien</option>
        </select>
    
    </div>
</main>
</template>

<style lang="scss" scoped>
main{
    background-color: rgb(212,143,56);
    
    .container {
        width: 1180px;
        height: 1000px;
        margin: auto;
        background-color: white;

        select {
            margin-top: 20px;
            padding: 10px;
            padding-right: 100px;
            padding-left: 5px;
            
            font-size: 20px;
        }
    }
}
</style>
