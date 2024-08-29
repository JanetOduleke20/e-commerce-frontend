<template>
  <div>
    <h1>Hello, welcome to Vue 3:)</h1>
    <p>{{name}}</p>
    <p>{{num}}</p>
    <p>{{school}}</p>

    <!-- Loop rendering -->
    <div v-for="(student, index) in students" v-bind:key="student.id">
      <p>{{index + 1}}. {{student.name}}, {{student.age}}</p>
    </div>

    <!-- Data binding - one-way binding -->
    <a v-bind:href="link"></a>

    <!-- Conditional statements -->
    <p v-if="day == 'Thursday'">Today is Thursday</p>
    <p v-else-if="day === 'Wednesday'">Today is Wednesday</p>
    <p v-else>Today is not Thursday</p>

    <!-- V-show -->
    <p v-show="day == 'Thursday'">Today is Thursday</p>

    <!-- Functions and events -->
    <button v-on:click="age++">Increase age</button>
    <p>Age - {{age}}</p>

    <button @click="myFunction">Toggle name</button>
  </div>
</template>

<script setup> //Composition API
import {ref} from 'vue';

  const name = ref("Janet");
  let num = 6;
  var school = "SQI"  

  const link = "edu.sqi.ng";

  const students = [
    {id: 1, name: "Janet", age: 15},
    {id: 2, name: "Japheth", age: 15},
    {id: 3, name: "Taiwo", age: 30},
    {id: 4, name: "Shakur", age: 18},
  ]

  const day = "Thursday"
  
  const age = ref(1);

  const myFunction = () => {
    name.value = "Oduleke";
  }
</script>