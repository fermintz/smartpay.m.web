<template>
  <q-dialog v-model="visible">
    <q-card>
      <q-card-section>
        <div class="inner">
          <h6>비밀번호 변경</h6>
          <q-form @submit="confirm">
            <div class="input-form">
              <label>현재 비밀번호(4자리)</label>
              <q-input outlined maxlength="4" type="tel" ></q-input>

            </div>
            <div class="input-form">
              <label>새 비밀번호(4자리)</label>
            <q-input outlined maxlength="4" type="tel"></q-input>
            </div>
            <div class="input-form">
              <label>새 비밀번호 확인</label>
              <q-input outlined maxlength="4" type="tel"></q-input>
            </div>
          </q-form>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat v-close-popup>취소</q-btn>
        <q-btn flat v-close-popup type="submit">비밀번호 변경</q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const visible = ref(true)

const confirm = ()=>{
  visible.value = false
}

</script>

<style lang="scss" scoped src="./passChange.scss"> 

</style>