<template>
    <div class="col-6 mx-auto shadow-sm card my-4 p-2">
        <form @submit.prevent="register()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe" v-model="full_name">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="email">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone number</label>
                <input type="te;" class="form-control" id="exampleFormControlInput1" placeholder="+234789000000" v-model="phone_number">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="........" v-model="password">
            </div>
                <div class="mb-3 ms-auto">
                <button class="btn btn-md px-3 bg-warning" >Register</button>
                </div>

        </form>

    </div>

</template>

<script setup>
import {ref} from 'vue';
import axios from 'axios';


    const full_name = ref('');
    const email = ref('');
    const password = ref('');
    const phone_number = ref(0)

    const register = () => {
        const user = {full_name: full_name.value, email: email.value, phone_number: phone_number.value, password: password.value};
        axios.post('http://localhost:8000/api/register', user).then(res => {
            console.log(res.data);
        })
    }
    

</script>

<style>

</style>