<template>
    <div class="hello">
        <router-link to="/imagen">Ver Imagen</router-link>
    </div>
</template>

<script>
export default {
    name: 'Saludo',
    props: {
        msg: String
    }
}
</script>

<style scoped>
</style>
