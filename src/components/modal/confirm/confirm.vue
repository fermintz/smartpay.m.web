<template>
  <q-dialog v-model="confirm">
    <q-card>
      <q-card-section>
        <h6>로그아웃</h6>
        <p>
           지금 로그아웃 하시겠습니까?
        </p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat v-close-popup>취소</q-btn>
        <q-btn flat @click="$router.push('login')">확인</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const confirm = ref(true)

</script>

<style lang="scss" scoped src="./confirm.scss" />
