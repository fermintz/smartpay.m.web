<template>
  <div class="home">
    <q-tab-panels
      v-model="tab"
      animated
    >
      <q-tab-panel name="first">
        <div class="text-h6">QR촬영</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
      <q-tab-panel name="second">
        <Product />
      </q-tab-panel>
      <q-tab-panel name="three">
        <Mypage />
      </q-tab-panel>
      <q-tab-panel name="four">
        <Customer />
      </q-tab-panel>
    </q-tab-panels>

    <div class="bottom-navi">
      <q-tabs
        v-model="tab"
        indicator-color="transparent"
        active-color="primary"
      >
        <q-tab name="first" icon="qr_code_scanner">
          <label>QR촬영</label>
        </q-tab>
        <q-tab name="second" icon="storefront">
          <label>장비이용</label>
        </q-tab>
        <q-tab name="three" icon="person">
          <label>나의정보</label>
        </q-tab>
        <q-tab name="four" icon="support_agent">
          <label>고객센터</label>
        </q-tab>
      </q-tabs>
    </div>
  </div>

  
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import Header from '@/components/header.vue'
import Customer from '@/views/home/customer/customer.vue'
import Mypage from '@/views/home/mypage/mypage.vue'
import Product from '@/views/home/product/product.vue'

const tab = ref('second')
</script>

<style lang="scss" scoped src="./home.scss" />
