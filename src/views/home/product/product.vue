<template>
  <Header />
  <div class="product">
    <div class="title">
      <h5>선택된 장비는 <b>A01-세탁기</b> 입니다 이거보다 더 길어지면?</h5>
      <p>장비를 다시 선택하시려면 <b>QR코드</b>를 다시 스캔해주세요</p>
    </div>

    <div class="selectBtns row">
      <q-btn flat 
        v-for="(item, index) in ['상품선택','투입금액 직접입력']" 
        :key="item" 
        :class="{active:tabState === index}"
        @click="tabState = index"
      >
          {{item}}
      </q-btn>
      <span :class="{right:tabState === 1}"></span>
    </div>

    <h6>상품목록 <b>7개</b></h6>

    <div class="goodsList">
      <div class="goodsItem row">
        <div class="left">
          <label>Event</label>
          <strong>이름이 매우매우 긴 간편한 세탁</strong>
          <span span>15분</span>
        </div>
        <div class="right">
          <span>9,000원</span>
          <strong>
            7,000
          </strong>
        </div>
      </div>

      <div class="goodsItem row" v-for="item in 5" :key="item">
        <div class="left">
          <label v-show="false">이벤트</label>
          <div class="info">
            <strong>기본세탁</strong>
            <span span>15분</span>
          </div>
          
        </div>
        <div class="right">
          <span v-show="false">9,000원</span>
          <strong>
            7,000
          </strong>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/header.vue'
import {ref} from 'vue'

const tabState = ref(0);

</script>

<style lang="scss" scoped src="./product.scss">

</style>