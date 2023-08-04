<template>
  <div id="app">
    <router-view></router-view>
  </div>

  <table>
    <thead>
      <tr>
        <th>Cripto Moneda</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(coin, index) in coins" :key="coin.id">
        {{ index + 1}} - {{ coin.name }} - {{ coin.symbol }} <img :src="coin.image" style="width: 2rem" class="me-2" />
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  name: 'App',
  data(){
      return {
        coins: [],
      }
    },
    async mounted(){
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
      const datos = await res.json()
      //console.log(datos)
      this.coins = datos
    }

}
</script>

<style scoped>
</style>
