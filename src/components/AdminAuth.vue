<template>
   <div class="col-6 mx-auto shadow-sm card my-4 p-2">
        <form @submit.prevent="route.path === '/admin/register' ? register() : login()">
            <div class="mb-3" v-if="route.path === '/admin/register'">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe" v-model="full_name">
            </div>
            <div v-for="error in errors['name']" :key="error">
                <span class="text-danger text-sm">{{error}}</span>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="email">
            </div>
              <div v-for="error in errors['email']" :key="error">
                <span class="text-danger text-sm">{{error}}</span>
            </div>
            <!-- Login error -->
            <div>
                <span class="text-danger text-sm">{{error}}</span>
            </div>

            <div class="mb-3" v-if="route.path === '/admin/register'">
                <label for="exampleFormControlInput1" class="form-label">Role</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Manager" v-model="role">
            </div>
              <div v-for="error in errors['role']" :key="error">
                <span class="text-danger text-sm">{{error}}</span>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="........" v-model="password">
            </div>
            <div v-for="error in errors['password']" :key="error">
                <span class="text-danger text-sm">{{error}}</span>
            </div>

                <div class="mb-3 ms-auto">
                <button class="btn btn-md px-3 bg-warning" v-if="route.path === '/admin/register'">Register</button>
                <button class="btn btn-md px-3 bg-warning" v-else>Login</button>

                </div>

        </form>

    </div>
</template>

<script setup>
    import axios from "axios";
    import { ref } from "vue";
    import {url} from '../data.js';
    import {useRouter, useRoute} from 'vue-router'

    const full_name = ref('');
    const email = ref('');
    const role = ref('');
    const password = ref('');

    const errors = ref([]);
    const error = ref('');


    const router = useRouter();
    const route = useRoute();

    // if(route.path === '/admin/login') {
    //     console.log('yes');
    // }else {
    //     console.log('no');
        
    // }

   

    const register = () => {
        const adminDetails = {name: full_name.value, email: email.value, role: role.value, password: password.value};
        axios.post(`${url}admin/register`, adminDetails).then(res => {
            if(res.data.status) {
                router.push('/admin/login');
            }else {
                errors.value = res.data.errors;   
            }
        })
    }

    const login = () => {
        const loginDetails = {email: email.value, password: password.value};
        axios.post(`${url}admin/login`, loginDetails).then(res => {
            if(res.data.status) {
                // router.push('/admin/dashboard');
                console.log(res.data.admin  );
                
            }else {
                error.value = res.data.error
            }
        })
    }
</script>

<style>

</style>