<template>
  <div class="bg-white min-h-screen">
    <Nav />
    <slot />
    <Footer />
  </div>
</template>


<script setup>
import Nav from '@/layouts/navbar.vue';
import Footer from '@/layouts/footer.vue';



</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
  padding: 0;
  margin: 0;
  font-family: 'poppins';
  background-color: #DDD;
}

.navbar {
  border-bottom: 1px solid #BBBBBB;
}

.nav-link {
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: #00E676;
  padding: 20px 0px;
  margin: 0px 20px;
  display: inline-block;
  position: relative;
}

.nav-link:hover {
  opacity: 1;
}

.nav-link::before {
  transition: 300ms;
  height: 4px;
  content: "";
  position: absolute;
  background-color: #031D44;
}

.nav-link-ltr::before {
  width: 0%;
  bottom: 10px;
}

.nav-link-ltr:hover::before {
  width: 100%;
}

.nav-link-fade-up::before {
  width: 100%;
  bottom: 5px;
  opacity: 0;
}

.nav-link-fade-up:hover::before {
  bottom: 10px;
  opacity: 1;
}

.nav-link-grow-up::before {
  height: 0%;
  width: 100%;
  bottom: 0px;
}

.nav-link-grow-up:hover::before {
  height: 5px;
}
</style>
