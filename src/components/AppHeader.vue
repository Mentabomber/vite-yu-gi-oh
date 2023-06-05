<script>


export default{
    name: "AppHeader"
}
</script>

<template>
    <header>
        <div class="img-container">
            <img src="Yu-Gi-Oh!_(Logo).jpg" alt="yu-gi-oh-logo">
        </div>
        <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>

<style lang="scss" scoped>
header{
    display: flex;
    align-items: center;
    align-self: center;
    padding: 15px;
}
.img-container{

    width: 150px;

    img {
        width: 100%;
    }
}


</style>
