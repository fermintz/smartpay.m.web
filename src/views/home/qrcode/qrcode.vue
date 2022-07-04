<template>
  <div class="qrcode">
    <div class="camera">
      
    </div>
    <div class="inner">
      <div class="top bg">
        <div class="header">
          <div class="logo">
            <img src="@/assets/img/logo_w.png">
          </div>
        </div>
        
        <div class="title">
          <h6>장비선택</h6>
          <p>세탁장비에 부착된 <b>QR코드</b>를<br>촬영해주세요</p>
        </div>
      </div>
      <div class="medium">
        <div class="bg"></div>
        <div class="none_bg">
          <div class="box top-left"></div>
          <div class="box top-right"></div>
          <div class="box bottom-left"></div>
          <div class="box bottom-right"></div>
          <div class="plusIcon">
            <span class="hori"></span>
            <span class="ver"></span>
          </div>
        </div>
        <div class="bg"></div>
      </div>
      <div class="bg bottom">
        <p>
          <!-- QR코드를 스캔하여 장비에 금액을<br>투입할 수 있습니다 -->
        </p>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped src="./qrcode.scss">

</style>