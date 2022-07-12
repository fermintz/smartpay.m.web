<template>
  <div class="header">
    <q-btn icon="arrow_back" round flat @click="$router.go(-1)"/>
    <h6>상세정보</h6>

  </div>
  <div class="detail">
    <div class="title">
      <h5>선택된 장비는  <b>A01-세탁기</b> 입니다</h5>
      <p>선택하신 장비와 상품이 맞는지 다시 한번 확인 후 결제해주세요</p>
    </div>


    <dl class="goods">
      <dt>선택된 상품</dt>
      <dd>
        <span>초강력 세탁</span>
        <strong>5,000원</strong>
      </dd>
    </dl>

    <div class="divider"></div>

    <dl class="point">
      <dt>포인트사용</dt>
      <dd>
        <div class="myPoint">
          <span>나의포인트</span>
          <strong>{{myPoint}}P</strong>
        </div>
        <div class="pointUse">
          <div class="pointUseView">
            <span></span>
            <strong>{{usePoint}}</strong>
          </div>
          <div class="pointUseBtns">
            <q-btn flat @click="usePoint += 500">500</q-btn>
            <q-btn flat @click="usePoint += 1000">1,000</q-btn>
            <q-btn flat @click="usePoint = 0">초기화</q-btn>
            <q-btn flat @click="usePoint = myPoint" class="all">전액사용</q-btn>
          </div>
        </div>
      </dd>
    </dl>

    <div class="divider"></div>

    <dl class="credit">
      <dt>결제정보</dt>
      <dd class="credit_info">
        <div class="total">
          <span>총 결제금액</span>
          <strong>5,000원</strong>
        </div>
        <div class="divider"></div>
        <ul>
          <li>
            <span>상품금액</span>
            <strong>5,000원</strong>
          </li>
          <li>
            <span>사용포인트</span>
            <strong>-{{usePoint}}원</strong>
          </li>
          <li>
            <span>적립예상 포인트</span>
            <strong>500P</strong>
          </li>
        </ul>       
      </dd>
      
      
    </dl>

    <div class="finish">
        <ul class="agree">
          <li @click="check1 = !check1">
            <q-checkbox
              dense
              v-model="check1"
              checked-icon="check_circle"
              unchecked-icon="check_circle_outline"
              label="서비스이용 동의"
              size="50px"
            />
            <q-btn outline class="agreeBtn" @click.stop="()=>{}">
              약관보기
            </q-btn>
          </li>
          <li @click="check2 = !check2">
            <q-checkbox
              dense
              v-model="check2"
              checked-icon="check_circle"
              unchecked-icon="check_circle_outline"
              label="개인정보 취급방침"
              size="50px"
            />
            <q-btn outline class="agreeBtn" @click.stop="()=>{}">
              약관보기
            </q-btn>
          </li>
        </ul>

        <div class="company">
          <strong>(주)페이오티</strong>
          <span>사업자등록번호: 599-81-00659</span>
          <span>통신판매업: 2021-부산강서구-0877</span>
          <span>소재지: 부산광역시 강서구 대저1동 2304-3</span>
          <span>대표자: 차경진</span>
          <span>연락처: 070-4709-1003</span>
        </div>
      </div>

      <div class="bottom_btns">
        <q-btn flat class="q-btn" @click="$router.push('finish')">
          결제하기
        </q-btn>
      </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const check1 = ref(false)
const check2 = ref(false)
const usePoint = ref(0)
const myPoint = ref(5000)
const goodsPrice = ref(5000)

</script>

<style lang="scss" scoped src="./detail.scss">

</style>