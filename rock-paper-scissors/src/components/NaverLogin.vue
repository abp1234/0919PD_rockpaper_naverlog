<!-- NaverLogin.vue -->
<template>
    <div id="naver_id_login"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const CLIENT_ID='2QCAdLgD9qjHnzdsTVzQ';
const CALLBACK_URL='http://localhost:5173';
const SERVICE_URL='http://localhost:5173';

const initializeNaverLogin = () => {
  const script = document.createElement('script');
  script.src = 'https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js';
  script.charset = 'utf-8';
  
  // 스크립트 로드 완료 후 콜백 함수 실행
  script.onload = () => {
    if (typeof naver_id_login === 'undefined') {
      console.error('Naver Login script failed to load.');
      return;
    }
    const naver_id_login_instance = new naver_id_login(CLIENT_ID, CALLBACK_URL);
    const state = naver_id_login_instance.getUniqState();
    naver_id_login_instance.setButton('white', 2, 40);
    naver_id_login_instance.setDomain(SERVICE_URL);
    naver_id_login_instance.setState(state);
    naver_id_login_instance.setPopup();
    naver_id_login_instance.init_naver_id_login();
  };

  script.onerror = () => {
    console.error('Failed to load the Naver Login script.');
  };

  document.head.appendChild(script);
};

onMounted(() => {
  initializeNaverLogin();
});
</script>
<style>
    
</style>