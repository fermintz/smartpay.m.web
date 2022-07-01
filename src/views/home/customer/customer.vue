<template>
  <Header />
  <div class="customer">
    
    
    <div class="section banner">
    
    </div>

    <div class="section">
      <h6>공지사항</h6>
      <div class="notice">
        <strong>21.06.14</strong>
        <p>안녕하세요 워시앤클린 광안점입니다 오늘부터 적립 2배 이벤트를 시작합니다 많은 이용 부탁드립니다</p>
      </div>
    </div>

    <div class="section">
      <h6>고객센터</h6>
      <div class="company">
        <div class="tel">
          <q-icon name="phone"></q-icon>
          <span>070-7761-1486</span>
        </div>
        <div class="row">
          <div class="col-6">
            <strong>소재지</strong>
            <span>부산광역시 강서구 대저1동 2304-3</span>
          </div>
          <div class="col-6">
            <strong>사업자번호</strong>
            <span>599-81-00659</span>
          </div>
        </div>

        <div class="agree_btns">
          <q-btn flat class="full-width" align="between">
            <label>서비스 이용약관</label>
            <q-icon name="arrow_right"></q-icon>
          </q-btn>
          <q-btn flat class="full-width" align="between">
            <label>개인정보 취급방침</label>
            <q-icon name="arrow_right"></q-icon>
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ref from 'vue'
import Header from '@/components/header.vue'

</script>

<style lang="scss" scoped src="./customer.scss">

</style>