<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card>
      <div class="top">
        <div class="head">
          <q-icon name="lock_outline"></q-icon>
          <h6>비밀번호 변경</h6>
        </div>
        <div class="cont">
          <q-input outlined placeholder="현재 비밀번호(4자리)" type="tel" :maxlength="4"/>
          <div class="divider"></div>
          <q-input outlined placeholder="새 비밀번호(4자리)" style="margin-bottom:10px;"  type="tel" :maxlength="4"/>
          <q-input outlined placeholder="새 비밀번호 확인"  type="tel" :maxlength="4"/>
        </div>
      </div>
      
      <div class="bottom" align="right">
        <q-btn flat v-close-popup @click="onDialogCancel" class="cancle">취소</q-btn>
        <q-btn flat @click="onDialogOK" class="ok">확인</q-btn>
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useDialogPluginComponent } from "quasar";

const props = defineProps(["title", "message"]);
defineEmits([...useDialogPluginComponent.emits]);
const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();
</script>

<style lang="scss" scoped src="./passChange.scss" />
