<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
     <img alt="Vue logo" src="../assets/logo.png" class="navbar-brand">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="btn ">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name: 'Products'}" class="btn ">Products</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
    
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

        <li class="nav-item">
          <router-link to="/register" class="btn ">Register</router-link>
        </li>
      
    </ul>
    </div>
  </div>
</nav>
</template>

<script setup> // Composition API

</script>

<style scoped>
.navbar-brand {
    width: 50px;
}
</style>