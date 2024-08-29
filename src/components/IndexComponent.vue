<template>
    <div>
        <p>{{username}}</p>
        <button @click="score++">Increase score</button>
        <button @click="myFunction">Toggle username</button>
        <p>{{name}}</p>
    </div>
</template>

<script> //Options API
import {ref} from 'vue'
export default {

    setup() {
        const name = ref("nnknknk");
        return {name}
    },
    data() {
        return {
            username: "Stephen",
            password: "12345678",
            students: [
                {id: 1, name: "Janet", age: 15},
                {id: 2, name: "Japheth", age: 15},
                {id: 3, name: "Taiwo", age: 30},
                {id: 4, name: "Shakur", age: 18},
            ],
            score: 50
        }
    },
    methods: {
        myFunction() {
            this.username = "Olapade"
        }
    }
}
</script>