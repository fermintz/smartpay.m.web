<template>
  <q-dialog
    v-model="visible"
    
  >
    <div class="loading">
      <img src="@/assets/img/loading.gif">
      <span>Loading...</span>
    </div>
  </q-dialog>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const visible = ref(true)

</script>

<style lang="scss" scoped src="./loading.scss" />
