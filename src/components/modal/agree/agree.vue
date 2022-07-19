<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide" full-height>
    <q-card>
      <div class="top">
        <div class="head">
          <q-icon name="task_alt"></q-icon>
          <h6>{{title}}</h6>
        </div>
        <div class="cont">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit explicabo esse amet ipsa porro dignissimos blanditiis sit quasi repudiandae voluptas odit cumque et quibusdam, modi, accusantium corporis sed perspiciatis assumenda?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit explicabo esse amet ipsa porro dignissimos blanditiis sit quasi repudiandae voluptas odit cumque et quibusdam, modi, accusantium corporis sed perspiciatis assumenda?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit explicabo esse amet ipsa porro dignissimos blanditiis sit quasi repudiandae voluptas odit cumque et quibusdam, modi, accusantium corporis sed perspiciatis assumenda?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit explicabo esse amet ipsa porro dignissimos blanditiis sit quasi repudiandae voluptas odit cumque et quibusdam, modi, accusantium corporis sed perspiciatis assumenda?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit explicabo esse amet ipsa porro dignissimos blanditiis sit quasi repudiandae voluptas odit cumque et quibusdam, modi, accusantium corporis sed perspiciatis assumenda?</p>
        </div>
      </div>

      <div class="bottom" align="right">
        <q-btn flat class="ok" @click="onDialogOK">닫기</q-btn>
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useDialogPluginComponent } from 'quasar';

const props = defineProps(["title"])

defineEmits([
  ...useDialogPluginComponent.emits
])

const {dialogRef, onDialogHide, onDialogOK, onDialogCancel} = useDialogPluginComponent()

</script>

<style lang="scss" scoped src="./agree.scss"> 

</style>