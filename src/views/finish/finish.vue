<template>
  <div class="finish">
    <div class="inner">
      <div class="top">
        <div class="icon">
          <q-icon name="check_circle">
            
          </q-icon> 
        </div>

        <dl>
          <dt>결제가 완료되었습니다</dt>
          <dd>
            <b>A01세탁기</b>에 금액이 올바르게<br>투입되었는지 확인해주세요
          </dd>
        </dl>
      </div>

      <div class="btns">
        <div class="btn">
          <q-btn flat round @click="$router.push('/')">
            <q-icon name="home"></q-icon>
          </q-btn>
          <span>메인으로</span>
        </div>
        <div class="btn">
          <q-btn flat round @click="$router.push('/')">
            <q-icon name="help_outline"></q-icon>
          </q-btn>
          <span>고객센터</span>
        </div>
      </div>
    </div>

    <div class="guide">
      <div class="image">
        <img src="@/assets/img/last.png">
      </div>
      <p>
        <b>A01세탁기</b>의 시작버튼을 눌러 사용해주세요
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped src="./finish.scss" />
