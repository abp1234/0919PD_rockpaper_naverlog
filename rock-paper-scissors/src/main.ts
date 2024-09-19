import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
// vue-naver-login을 사용할 때 타입 에러를 방지하기 위해 직접 타입 선언을 추가합니다.
import Naver from 'vue-naver-login';
// virtual:pwa-register를 가져올 때 발생하는 문제를 해결하기 위해 추가 설정을 합니다.
import { registerSW } from 'virtual:pwa-register';

// 애플리케이션 생성
const app = createApp(App);

// // vue-naver-login 사용 설정
// app.use(Naver, {
//   clientId: '2QCAdLgD9qjHnzdsTVzQ', // 네이버 애플리케이션 클라이언트 ID
//   callbackUrl: 'http://localhost:5173', // 콜백 URL에 http:// 추가
// });

// 애플리케이션을 마운트합니다.
app.mount('#app');

// PWA 서비스 워커 등록
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('새로운 컨텐츠가 있습니다. 페이지를 새로고침 하세요.');
  },
  onOfflineReady() {
    console.log('오프라인에서 사용할 준비가 되었습니다.');
  },
});
