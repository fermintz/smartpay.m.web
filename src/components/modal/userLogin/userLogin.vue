<template>
  <q-dialog 
    v-model="visible" 
    position="bottom"
    @hide="step = 0"
  >
    <div class="loginBottomSheet">
      <div class="inner password-check" v-show="step === 0">
        <div class="top">
          <h5>다시 방문해주셨네요!<br />반갑습니다 <b>4561</b>님</h5>
          <p>본인 확인을 위해 비밀번호 4자리를 입력해주세요</p>
          <q-btn round unelevated class="closeBtn" @click="visible = false"
            >닫기</q-btn
          >
        </div>
        
        <q-form>
          <label>비밀번호 입력(4자리)</label>
          <q-input type="password" outlined maxlength="4" v-model="password"> </q-input>
          <q-btn 
            flat
            :disable="passwordState()"
            @click="next(1)"
            class="nextBtn"
          >
            확인
          </q-btn>
        </q-form>

        <div class="bottom">
          <q-btn unelevated rounded>
            <q-icon name="lock" size="15px"></q-icon>
            <label>비밀번호찾기</label>
          </q-btn>
        </div>
      </div>

      <div class="inner phone-check" v-show="step === 1"  v-motion-slide-visible-bottom>
        <div class="top">
          <strong>회원가입</strong>
          <h5>첫 방문을 환영합니다!</h5>
          <p>첫 사용하시는 분들은 전화인증이 필요합니다.</p>
          <q-btn round unelevated class="closeBtn" @click="visible = false"
            >닫기</q-btn
          >
        </div>

        <q-form>
          <label>전화번호 입력</label>
          <q-input type="tel" maxlength="11" outlined v-model="userPhone">
            <template v-slot:after>
              <q-btn flat class="subBtn" @click="snackbar('인증번호가 발송되었습니다')">인증번호발송</q-btn>
            </template>
          </q-input>
          <q-input type="tel" maxlength="4" outlined placeholder="인증번호를 입력해주세요" error-message="잘못된 인증번호입니다">

          </q-input>
          <q-btn flat class="nextBtn" @click="next(2)">
            확인
          </q-btn>
        </q-form>
      </div>

      <div class="inner password-maker" v-show="step === 2" v-motion-slide-visible-bottom>
        <div class="top">
          <strong>회원가입</strong>
          <h5>비밀번호를 생성해주세요</h5>
          <p>스마트페이 사용을 위한 비밀번호를 등록해주세요</p>
          <q-btn 
            round unelevated class="closeBtn" 
            @click="visible = false"
            >닫기</q-btn
          >
        </div>

        <q-form>
          <label>비밀번호 입력</label>
          <q-input type="tel" outlined maxlength="4" placeholder="비밀번호를 4자리를 입력해주세요"></q-input>
          <q-input type="tel" outlined maxlength="4" placeholder="비밀번호를 한번 더 입력해주세요"></q-input>
          
          <ul class="agree">
            <li>
              <q-checkbox
                dense
                v-model="check1"
                checked-icon="check_circle"
                unchecked-icon="check_circle_outline"
                label="서비스이용 동의"
                size="50px"
              />
              <q-btn outline class="agreeBtn">
                약관보기
              </q-btn>
            </li>
            <li>
              <q-checkbox
                dense
                v-model="check2"
                checked-icon="check_circle"
                unchecked-icon="check_circle_outline"
                label="개인정보 취급방침"
                size="50px"
              />
              <q-btn outline class="agreeBtn">
                약관보기
              </q-btn>
            </li>
          </ul>
          
          <q-btn flat class="nextBtn" @click="$router.push('/')">
            확인
          </q-btn>
        </q-form>
      </div>
    </div>
  </q-dialog>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { userLoginModal } from "@/compositions/userLoginModal";
import { useQuasar } from 'quasar';

const password = ref('');
const userPhone = ref('01085254561')
const step = ref(0);
const { visible } = userLoginModal();

const check1 = ref(false)
const check2 = ref(false)

const next = (num:number)=>{
  step.value = num
  console.log(step.value)
}


// 스낵바 사용
const $q = useQuasar()
const snackbar = (msg)=> {
  $q.notify({
    position:'top',
    message:msg,
    timeout: 500,
  })
}
// 스낵바 끝

const passwordState = function(){
  if(password.value.length === 4){
    return false
  }else{
    return true
  }
}

</script>

<style lang="scss" scoped src="./userLogin.scss" />
