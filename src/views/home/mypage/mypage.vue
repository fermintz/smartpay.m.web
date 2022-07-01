<template>
  <Header/>
  <div class="mypage">
    <div class="myPoint">
      <span>4561님의 보유포인트</span>
      <strong>5,500P</strong>
    </div>
    <div class="btns row">
      <q-btn flat>비밀번호 변경</q-btn>
      <q-btn flat>로그아웃</q-btn>
    </div>
    <div class="divider"/>

    <div class="useListTop">
       <h6>
        이용내역 <b>3개</b>
       </h6>
    </div>
    <div class="useList">
      <q-infinite-scroll @load="onLoad" :offset="250">
        <div class="useItem" v-for="item in items" :key="item">
          <div class="top">
            <label>장비결제</label>
            <span>2022.04.12 12:45</span>
          </div>
          <div class="name">
            세탁기 1번
          </div>
          <div class="state">
            <dl>
              <dt>결제금액</dt>
              <dd>5,000원</dd>
            </dl>
            <dl>
              <dt>사용포인트</dt>
              <dd>0원</dd>
            </dl>
            <dl>
              <dt>적립포인트</dt>
              <dd>500P</dd>
            </dl>
            <dl class="last">
              <dt>최종포인트</dt>
              <dd>5,000P</dd>
            </dl>
          </div>
        </div>
        <template v-slot:loading >
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </template>
      </q-infinite-scroll>
    </div>
  </div>

  <Confirm />
  <PassChange />
</template>

<script lang="ts" setup>
import Header from '@/components/header.vue'
import Confirm from '@/components/modal/confirm/confirm.vue'
import PassChange from '@/components/modal/passChange/passChange.vue';

import {ref} from 'vue'

const items = ref([{},{},{},{},{}])

const onLoad = (index, done)=>{
  // setTimeout(()=>{
  //   items.value.push({},{},{})
  //   done()
  // },2000)
}

</script>

<style lang="scss" scoped src="./mypage.scss">

</style>