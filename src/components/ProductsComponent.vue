<template >
<div class="container-fluid">
  <h4>Products</h4>

  <div class="card" style="width: 18rem;">
    <img src="../assets/glass-bottle.webp" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">600ml glass bottle</h5>
        <p class="card-text fw-bold">4,000</p>
        <!-- <router-link to="/products/3/glass-bottle" class="btn btn-warning">View product</router-link> -->

        <router-link :to="{name: 'Product', params: {id: 3, name: 'Glass bottle'}}"  class="btn btn-warning" >View product</router-link>
    </div>
    </div>

</div>
</template>

<script setup>

</script>

<style>

</style>