<script setup lang="ts">

</script>

<template>
  <div>
    <h1>Home Page </h1>
    <RouterLink to="/about" >About Page</RouterLink>
    <RouterLink to="/page" >Page of Projects</RouterLink>
    <RouterLink to="/page/1" >Page 1</RouterLink>
    <RouterLink :to="{name:'/page/[id]', params:{id:108}}" >Page 108</RouterLink>
    <RouterLink :to="{name:'/page/[id]', params:{id:'Nirmala'}}" >Page Nirmala</RouterLink>
  </div>
</template>
