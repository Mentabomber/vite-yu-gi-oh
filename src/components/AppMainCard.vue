<script>

export default{
    name: "AppMainCard",
    props: {
        details: Object
    }
}

</script>

<template>

<div class="card">
    <img :src="details.card_images[0].image_url" alt="">
    <h4>{{ details.name }}</h4>
    <h3>{{ details.archetype }}</h3>

</div>
</template>


<style lang="scss" scoped>
    .card{
        width: calc(100% / 5 - 10px);
        background-color: rgb(212,143,56);
        margin-bottom: 15px;
        img{
            width: 100%;
            height: 70%;
        }
        h4,
        h3{
            text-align: center;
            margin-top: 20px;
            font-size: 20px;
        }
        h4{
            color: white;
           
        }
       

    }
</style>
