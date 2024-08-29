<template>
  <div v-for="product in products" :key="product.id" class="row d-md-flex">
    <div class="card col-md-3">
        <div class="card-body">
            <div class="lead fw-bold">{{product.name}}</div>
            <span>{{product.price}}</span>
            <button class="btn btn-md bg-dark text-light">View more</button>
        </div>
    </div>

  </div>


  <div>Username - {{store.user}}</div>
  <input type="text" v-model="username" class="form-control">
  <button class="btn btn-md bg-dark text-light" @click="store.updateUser">Update user</button>



  <!-- Computed properties -->
  <div>Count - {{store.count}}</div>
  

</template>

<script setup>
    import { useMyStore } from '../stores/MyStore';
    import {ref} from 'vue';

    const store = useMyStore();

    const products = store.products;

    // console.log(store.products);
    const username = ref('')

   

    console.log(store.findProduct)
</script>

<style>

</style>