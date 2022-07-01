<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/img/logo_b.png" >
      <span>워시앤클린 금정점</span> 
    </div>

    <!-- <q-btn flat round>
      <q-icon name="logout"></q-icon>
    </q-btn> -->
  </div>
</template>

<style lang="scss" scoped>
.header{
  display:flex;
  align-items: center;
  justify-content: space-between;
  height:70px;
  margin-bottom:20px;
  .logo{
    display:flex;
    align-items: center;
    img{
      height:36px;
    }
    span{
      flex:1;
      margin-left:10px;
      font-size:12px;
      color:$grey-7;
    }
  }
  .q-btn{
      background:$grey-3;
    }
  }
  
</style>