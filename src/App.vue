<template>
  <div id="app">
    <router-view></router-view>  
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created(){
    const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`; //'https://vue-course-api.hexschool.io/api/pnjle6587/products';

    console.log(process.env.APIPATH);  

    this.$http.get(api).then((response) => {
      console.log(response.data)
    })
  },
}
</script>

<style lang="scss">
@import "./assets/all";
</style>
