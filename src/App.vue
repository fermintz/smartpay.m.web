<template>
  <router-view /> 
</template>


<script lang="ts" setup>

const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh',`${vh}px`)
}

setScreenSize()

window.addEventListener('resize', ()=>{
  setScreenSize()
})

</script>