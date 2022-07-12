<template>
  <div class="mypage">
    <Header/>
    <div class="myPoint">
      <span>4561님의 보유포인트</span>
      <strong>5,500P</strong>
    </div>
    <div class="btns row">
      <q-btn flat @click="passChange">
        <q-icon name="vpn_key" size="16px"></q-icon>
        <span>비밀번호 변경</span>
      </q-btn>
      <q-btn flat @click="confirm">
        <q-icon name="logout" size="16px"></q-icon>
        <span>로그아웃</span>
      </q-btn>
    </div>
    <div class="divider"/>

    <div class="useListTop">
       <h6>
        이용내역 <b>3개</b>
       </h6>
    </div>
    <div class="useList">
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
      <q-btn flat>
        <label>더보기</label>
        <q-icon name="keyboard_arrow_down" size="14px" style="margin-left:5px;"></q-icon>
      </q-btn>
    </div>
  </div>

  <PassChange />
</template>

<script lang="ts" setup>
import { useQuasar } from "quasar";
import Header from '@/components/header.vue'
import Confirm from '@/components/modal/confirm/confirm.vue'
import PassChange from '@/components/modal/passChange/passChange.vue';
import {ref} from 'vue'
import { useRouter } from "vue-router";

const items = ref([{},{},{},{},{}])
const router = useRouter();
const $q = useQuasar();

const confirm = async () => {
  const { onOk } = await $q.dialog({
    component: Confirm,
    componentProps: { title: "로그아웃", message: "로그아웃 하시겠습니까?" },
  }).onOk(()=>{
    router.push('login')
  });
};

const passChange = async () => {
  const { onOk } = await $q.dialog({
    component: PassChange,
  });
};


</script>

<style lang="scss" scoped src="./mypage.scss">

</style>