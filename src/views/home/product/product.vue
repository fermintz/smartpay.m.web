<template>
  <div class="product">
    <Header />
    <div class="top">
      <p>고객님이 선택하신 장비는</p>
      <div class="selectBtn">
        <label>세탁장비 01번</label>
        <q-icon name="expand_more" size="18px"></q-icon>
      </div>
    </div>

    <div class="selectBtns row">
      <q-btn
        flat
        v-for="(item, index) in ['상품선택', '투입금액 직접입력']"
        :key="item"
        :class="{ active: tabState === index }"
        @click="tabState = index"
      >
        {{ item }}
      </q-btn>
      <span :class="{ right: tabState === 1 }"></span>
    </div>

    <div class="tabCont" v-show="tabState === 0">
      <h6>결제금액에 <b>포인트 5%</b>가 적립됩니다</h6>

      <div class="goodsList">
        <!-- <div class="goodsItem" @click="$router.push('detail')">
          <div class="row">
            <div class="left">
              <label>Event</label>
              <strong>이름이 매우매우 긴 간편한 세탁</strong>
              <span span>15분</span>
            </div>
            <div class="right">
              <span>9,000원</span>
              <strong> 7,000 </strong>
            </div>
            <q-icon name="chevron_right" size="18px"></q-icon>
          </div>
        </div> -->

        <div class="goodsItem" v-for="item in 3" :key="item" @click="$router.push('detail')">
          <div class="row">
            <div class="left">
              <label v-show="false">이벤트</label>
              <div class="info">
                <strong>기본세탁</strong>
                <span span>15분</span>
              </div>
            </div>
            <div class="right">
              <span v-show="false">9,000원</span>
              <strong> 7,000 </strong>
            </div>
            <q-icon name="chevron_right" size="18px"></q-icon>
          </div>          
        </div>
      </div>
    </div>

    <div class="tabCont" v-show="tabState === 1">
      <h6>투입하실 금액을 입력해주세요</h6>
      <div class="coinInput">
        <div class="coinState">
          {{ coin }}
        </div>
        <div class="btns">
          <q-btn flat @click="coin = 0">초기화</q-btn>
          <q-btn flat @click="coin -= 500">-500원</q-btn>
          <q-btn flat @click="coin += 500">+500원</q-btn>
          
        </div>

        <div class="finish">
          <!-- <q-btn flat @click="$router.push('detail')"> 입력완료 </q-btn> -->
          <q-btn flat @click="confirm"> 입력완료 </q-btn>
        </div>
      </div>
    </div>

    <div class="company">
      <strong>(주)페이오티</strong>
      <span>사업자등록번호: 599-81-00659</span>
      <span>통신판매업: 2021-부산강서구-0877</span>
      <span>소재지: 부산광역시 강서구 대저1동 2304-3</span>
      <span>대표자: 차경진</span>
      <span>연락처: 070-4709-1003</span>
    </div>
    <AlertModal />
    <EqSelector />
    <Loading />
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/header.vue";
import Confirm from "@/components/modal/confirm/confirm.vue";
import Alert from "@/components/modal/alert/alert.vue";
import EqSelector from '@/components/modal/eqSelector/eqSelector.vue'
import Loading from '@/components/modal/loading/loading.vue'
import { useQuasar, } from "quasar";
import { onBeforeUnmount, ref } from "vue";

const tabState = ref(0);
const coin = ref(0);

const $q = useQuasar();
let timer

const confirm = async () => {
  const { onOk } = await $q.dialog({
    component: Confirm,
    componentProps: { title: "투입금액확인", message: "5,000원을 투입하시겠습니까?" },
  });
};

onBeforeUnmount(()=>{
  if(timer !== void 0){
    clearTimeout(timer)
    $q.loading.hide()
  }
})


// const showLoading = ()=>{    
//   $q.loading.show({
//     message:'자료를 불러오는 중입니다.',
//     spinnerSize:70,
//   })

//   timer = setTimeout(()=>{
//     $q.loading.hide()
//     timer = void 0
//   },1500)
// }

// showLoading();


const alert = async ()=>{
  const {onOk} = await $q.dialog({
    component: Alert,
    componentProps: {title:'경고', message: '잘못된 접근입니다'}
  })
}
</script>

<style lang="scss" scoped src="./product.scss"></style>
