<template>
  <div class="about">
    <div class="box" v-motion-roll-visible-bottom></div>
  </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.about {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding:20px;
}
.box {
  height: 200px;
  width: 200px;
  background: black;
}
</style>
