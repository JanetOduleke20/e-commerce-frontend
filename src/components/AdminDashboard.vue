<template>
  <h4>Dashboard</h4>
</template>

<script setup>
import axios from "axios";
import { onMounted } from "vue";
import {url} from '../data.js'
// import { useRouter} from 'vue-router';

    // const router = useRouter()
    
    // const adminDetails = ref({})

    onMounted(() => {
        
        
        axios.get(`${url}admin/get`).then(res => {
            // if(res.data.status) {
            //     adminDetails.value = res.data.admin
            //     console.log(adminDetails)
            // }else {
            //     router.push('/admin/login')
            // } 
            console.log(res.data);
            
        })
        
    })

</script>

<style>

</style>