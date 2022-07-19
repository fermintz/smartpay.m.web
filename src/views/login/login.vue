<template>
  <q-layout>
    <div class="login">
      <div class="top">
        <div class="logo">
          <img src="@/assets/img/logo_b.png" />
          <span>워시프렌즈 금정점</span>
        </div>
        
        <div class="text">
          <h5>
            어플없이 간편결제!<br>
            <b>전화번호로 간편하게</b> 이용하세요
          </h5>
        </div>
        
        <q-form @submit="toggle">
          <label>휴대폰번호를 입력</label>
          <q-input
            type="tel"
            v-model="text"
            placeholder="010"
            :clearable="text.length >= 4 ? true : false"
            @clear="text = '010'"
            clear-icon="close"
            maxlength="11"
            @focus="focusAction"
            @blur="blurAction"
          >
            <template v-slot:hint> '-' 를 제외한 숫자만 입력해주세요 </template>
          </q-input>
        </q-form>
        <div class="btns">
          <q-btn
            class="full-width"
            type="submit"
            unelevated
            color="primary"
            :disable="loginBtnState()"
            @click="toggle"
          >
            로그인
          </q-btn>
        </div>
      </div> <!-- top -->

      <div class="banner">
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          infinite
          :autoplay="4000"
          animated
          control-type="flat"
          control-color="white"
          navigation
          arrows
          height="auto"
        >
          <q-carousel-slide :name="0">
            <img src="@/assets/img/login_slide01.png">
          </q-carousel-slide>
          <q-carousel-slide :name="1">
            <img src="@/assets/img/login_slide01.png">
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>

    <UserLogin />
  </q-layout>
  
</template>

<style lang="scss" src="./login.scss" scoped />

<script setup lang="ts">
import { ref } from "vue";
import UserLogin from "@/components/modal/userLogin/userLogin.vue";
import { userLoginModal } from "@/compositions/userLoginModal";

const { toggle } = userLoginModal();

const text = ref("010");
const slide = ref(0)

let target = document.getElementsByClassName('top')

const focusAction = function(){
  target[0].style.backgroundColor = '#fff'
}

const blurAction = function(){
  target[0].style.backgroundColor = 'unset'
}


const loginBtnState = function () {
  if (text.value.length === 11) {
    return false;
  } else {
    return true;
  }
};

</script>
