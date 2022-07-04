<template>
  <div class="errorPage">
    <q-icon name="front_hand">
  
    </q-icon>
    <div class="text">
      <h6>페이지를 찾을 수 없습니다</h6>
      <p>요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다</p>
    </div>
    

    <q-btn flat @click="$router.go(-1)">뒤로가기</q-btn>
  </div>
</template>

<style lang="scss" scoped>
.errorPage{
  height:100vh;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:25px;
  .q-icon{
    font-size:100px;
    color:$primary;
  }
  .text{
    width:100%;
    text-align:center;
    margin:40px 0;

    h6{
      font-weight:bold;
    }
    p{
      margin-top:10px;
      color:$grey-7;
    }
  }

  .q-btn{
    border-radius:8px;
    border:1px solid $dark
  }
}
</style>