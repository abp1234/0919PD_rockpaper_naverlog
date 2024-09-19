<script setup lang="ts">
import {ref } from 'vue';
import NaverLogin from './components/NaverLogin.vue';
import NaverCallback from './components/NaverCallback.vue';
const user = ref(null);

const handleSignIn = (userDate: any)=>{
  user.value=userDate
}

const choose = async (choice: string) => {
  if (user.value) {
    try {
      const response = await fetch('/api/choice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ choice, user: user.value }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  } else {
    console.log('사용자가 로그인하지 않았습니다.');
  }
};

</script>

<template>
  <div id="app">
    <naver-login v-if="!user" @sign-in="handleSignIn" />
    <naver-callback v-if="user" />
    <div v-if="user">
      <h2>환영합니다, {{ user.nickname }}!</h2>
      <button @click="choose('rock')">가위</button>
      <button @click="choose('paper')">바위</button>
      <button @click="choose('scissors')">보</button>
    </div>
  </div>
</template>

<style scoped>

</style>
