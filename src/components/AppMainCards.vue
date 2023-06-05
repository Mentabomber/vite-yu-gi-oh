<script>
export default{
    name: "Card",
    props: {
        details: Object
    }
}

</script>

<template>

<div class="card">
    <img :src="details.thumb" alt="details.series">
    <h3>{{ details.series }}</h3>
</div>

</template>


<style lang="scss">
    .card{
        width: calc(100% / 5);
        
        padding: 5px;
        img{
            width: 100%;
            height: 70%;
        }

    }
</style>
