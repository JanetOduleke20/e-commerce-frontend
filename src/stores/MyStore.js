import axios from "axios";
import { defineStore } from "pinia";
import { ref, computed } from "vue";



export const useMyStore = defineStore('store', () => { //composition API
    const user = ref('Adebayo');

    const count = ref(5);

    const allProducts = ref([]);
    const products = [
        {id: 1, name: 'Redmi 13 pro', price: '200,000'},
        {id: 2, name: 'Samsung Galaxy S24', price: '288,000'},
        {id: 3, name: 'Iphone 100', price: '1,000,000'},
        {id: 4, name: 'Redmi 12 UK used (bad battery)', price: '10,000'},
        {id: 5, name: 'Redmi 13 pro (Awoof)', price: '100,000'},

    ]

    const findProduct = computed(()=> {
        return products.find((product) => product.id == 2);
    })

    const updateUser = () => {
        user.value = 'Joyce';
    }

    const getProducts = () => {
        axios.get('http://localhost:8000/api/getProducts').then(res=> {
            allProducts.value = res.data.products;
        })
    }       
    return {user, products, findProduct, count, updateUser, getProducts, allProducts}

})