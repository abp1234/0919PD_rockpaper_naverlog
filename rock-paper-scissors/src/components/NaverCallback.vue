
<!-- NaverCallback.vue -->
<template>

</template>

<script setup lang="ts">

const user = ref(null);

const CLIENT_ID='2QCAdLgD9qjHnzdsTVzQ';
const CALLBACK_URL='http://localhost:5173';
const SERVICE_URL='http://localhost:5173';

const getNaverUserProfile = () =>{
    const script = document.createElement('script');
    script.src = 'https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js';
    script.charset = 'utf-8';
    document.head.appendChild(script);

    script.onload = () => {
    const naver_id_login = new naver_id_login(CLIENT_ID, CALLBACK_URL);
    const token = naver_id_login.oauthParams.access_token;

    naver_id_login.get_naver_userprofile('naverSignInCallback()');

    // Callback function to handle profile data
    (window as any).naverSignInCallback = () => {
      const profile = {
        email: naver_id_login.getProfileData('email'),
        nickname: naver_id_login.getProfileData('nickname'),
        age: naver_id_login.getProfileData('age')
      };
      user.value = profile;
    };
  };
};

onMounted(() => {
  getNaverUserProfile();
});
</script>