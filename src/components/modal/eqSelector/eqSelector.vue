<template>
  <q-dialog 
    v-model="visible" 
    position="bottom"
  >
    <div class="eqSelector">
      <div class="top">
        <span>장비선택</span>
        <h5>장비를 선택해주세요</h5>
      </div>

      <q-btn flat class="close-btn" v-close-popup>닫기</q-btn>

      <div class="tabs">
        <q-btn flat 
          :class="{tab:true, active:tabActive === index}" v-for="(item, index) in ['세탁기','건조기','기타','세탁기','건조기','기타']" 
          :key="item"
          @click="tabActive = index"
        >
          {{item}}
        </q-btn>
      </div>

      <div class="tab-contents">
        <ul>
          <li>
            <div class="title">
              <span>현재 선택된 장비</span>
              <label label>세탁장비 01번</label>
            </div>
            <q-icon name="navigate_next"></q-icon>
          </li>
          <li>
            <div class="title">
              <label label>세탁장비 02번</label>
            </div>
            <q-icon name="navigate_next"></q-icon>
          </li>
          <li>
            <div class="title">
              <label label>세탁장비 03번</label>
            </div>
            <q-icon name="navigate_next"></q-icon>
          </li>
        </ul>
      </div>

    </div>
  </q-dialog>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const visible = ref(false)
const tabActive = ref(0)

</script>

<style lang="scss" scoped src="./eqSelector.scss"> 

</style>