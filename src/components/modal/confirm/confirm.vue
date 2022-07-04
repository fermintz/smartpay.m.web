<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card>
      <div class="top">
        <div class="head">
          <q-icon name="notifications_none"></q-icon>
          <h6>{{title}}</h6>
        </div>
        <div class="cont">
          <p>{{ message }}</p>
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

<style lang="scss" scoped src="./confirm.scss" />
