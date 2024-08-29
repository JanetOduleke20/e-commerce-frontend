<template>
  <h4>Display Products</h4>
  <p>{{productId}}</p> 
  <p>{{$route.params.name}}</p>


<div>{{store.user}}</div>
<button @click="store.updateUser">Update user</button>

  

</template>

<script setup>
import {useRoute} from 'vue-router';
import { computed, onMounted } from 'vue'
import {useMyStore} from '../stores/MyStore'


const store = useMyStore();
const $route = useRoute();


const productId = $route.params.id;

 const products = [
        {id: 1, name: 'Redmi 13 pro', price: '200,000', available: true},
        {id: 2, name: 'Samsung Galaxy S24', price: '288,000', available : false},
        {id: 3, name: 'Iphone 100', price: '1,000,000', available: false},
        {id: 4, name: 'Redmi 12 UK used (bad battery)', price: '10,000', available: true},
        {id: 5, name: 'Redmi 13 pro (Awoof)', price: '100,000', available: true},
]

const availableItems = computed(() => {
  return products.filter((product) => !product.available);
})

console.log(availableItems.value);

onMounted(()=>{
  store.getProducts();
  console.log(store.allProducts)
})



</script>

<style>

</style>