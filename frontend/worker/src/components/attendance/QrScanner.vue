<script setup>
import { QrcodeStream } from 'vue-qrcode-reader'
import { ref } from 'vue'
import dayjs from 'dayjs'
import { postAttendance } from '../../api/attendance'

const scanning = ref(false)
const scanType = ref('') // '출근' or '퇴근'
const result = ref('')
const error = ref('')
const locationError = ref(false)
const cameraError = ref(false)
const showCameraHelp = ref(false)

const emit = defineEmits(['success'])

function startScan(type) {
  result.value = ''
  error.value = ''
  scanType.value = type
  scanning.value = true
  cameraError.value = false
  showCameraHelp.value = false
}

async function onDetect([data]) {
  scanning.value = false
  locationError.value = false
  try {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const latitude = pos.coords.latitude
      const longitude = pos.coords.longitude
      await postAttendance({
        type: scanType.value,
        time: dayjs().format('HH:mm'),
        store: 'TAPPY 강남점',
        latitude,
        longitude
      })
      result.value = `${scanType.value} 기록이 저장되었습니다!`
      emit('success')
    }, (geoError) => {
      error.value = '위치 정보 획득 실패'
      locationError.value = true
    })
  } catch (e) {
    error.value = '기록 저장 실패'
  }
}
function onError(e) {
  error.value = e.message || 'QR 스캔 오류'
  scanning.value = false
  if (e.name === 'NotAllowedError' || e.name === 'NotFoundError' || e.name === 'NotReadableError') {
    cameraError.value = true
  }
}

function retryLocation() {
  locationError.value = false
  navigator.geolocation.getCurrentPosition(async (pos) => {
    await postAttendance({
      type: scanType.value,
      time: dayjs().format('HH:mm'),
      store: 'TAPPY 강남점',
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude
    })
    result.value = `${scanType.value} 기록이 저장되었습니다!`
    emit('success')
  }, (geoError) => {
    error.value = '위치 정보 획득 실패'
    locationError.value = true
  })
}

function retryCamera() {
  showCameraHelp.value = true
}
</script>

<template>
  <div class="qr-scanner">
    <div class="btn-row" v-if="!scanning && !cameraError && !locationError">
      <button class="scan-btn in" @click="startScan('출근')">출근 QR</button>
      <button class="scan-btn out" @click="startScan('퇴근')">퇴근 QR</button>
    </div>
    <div v-if="scanning && !cameraError" class="scanner-area">
      <QrcodeStream @detect="onDetect" @error="onError" />
      <div class="scan-msg">QR 코드를 카메라에 비춰주세요</div>
    </div>
    <div v-if="result" class="scan-result">{{ result }}</div>
    <div v-if="error" class="scan-error">{{ error }}</div>
    <div v-if="locationError">
      <button @click="retryLocation" class="scan-btn in">위치 권한 다시 요청</button>
    </div>
    <div v-if="cameraError">
      <button @click="retryCamera" class="scan-btn out">카메라 권한 다시 요청</button>
      <div v-if="showCameraHelp" class="camera-help">
        <b>카메라 권한 허용 방법 안내</b>
        <ul>
          <li><b>PC(크롬/엣지/웨일 등):</b><br>
            - 주소창 왼쪽 자물쇠(🔒) 아이콘 클릭 → <b>사이트 설정</b> → <b>카메라</b>를 "허용"으로 변경<br>
            - 변경 후 페이지를 새로고침 해주세요.
          </li>
          <li><b>iOS(아이폰/아이패드, 사파리):</b><br>
            - [설정] 앱 → Safari → <b>카메라</b> → "허용" 또는 "웹사이트별로 허용"<br>
            - 또는, 사파리에서 주소창 왼쪽 aA 아이콘 → <b>웹사이트 설정</b> → 카메라 "허용"<br>
            - 변경 후 사파리를 완전히 종료 후 다시 접속해 주세요.
          </li>
          <li><b>Android(크롬/삼성인터넷 등):</b><br>
            - 주소창 오른쪽 ⋮ 메뉴 → <b>사이트 설정</b> → <b>카메라</b> "허용"<br>
            - 또는, [설정] 앱 → 앱 → 사용하는 브라우저 → 권한 → 카메라 "허용"<br>
            - 변경 후 페이지를 새로고침 해주세요.
          </li>
        </ul>
        <div style="font-size:0.95em; color:#888; margin-top:0.5em;">
          * 브라우저/OS 버전에 따라 경로가 다를 수 있습니다.<br>
          * 권한 허용 후에도 동작하지 않으면 브라우저를 완전히 종료 후 다시 시도해 주세요.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.qr-scanner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}
.btn-row {
  display: flex;
  gap: 1.2rem;
  width: 100%;
  justify-content: center;
}
.scan-btn {
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 16px;
  padding: 0.9rem 2.2rem;
  box-shadow: 0 2px 8px rgba(79,209,197,0.13);
  cursor: pointer;
  transition: background 0.2s;
}
.scan-btn.in {
  background: #4fd1c5;
  color: #18191c;
}
.scan-btn.out {
  background: #6366f1;
  color: #fff;
}
.scan-btn:active {
  filter: brightness(0.95);
}
.scanner-area {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1/1;
  border-radius: 18px;
  overflow: hidden;
  background: #23272f;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.scan-msg {
  margin-top: 0.7rem;
  color: #b5b5b5;
  font-size: 1rem;
}
.scan-result {
  color: #4fd1c5;
  font-weight: 700;
  font-size: 1.1rem;
}
.scan-error {
  color: #ff6b6b;
  font-weight: 700;
  font-size: 1.1rem;
}
.camera-help {
  background: #fffbe7;
  color: #222;
  border-radius: 1rem;
  margin-top: 1.2rem;
  padding: 1.1rem 1.2rem;
  font-size: 1.05rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  line-height: 1.7;
}
.camera-help ul {
  margin: 0.7em 0 0.7em 1.1em;
  padding: 0;
  list-style: disc;
}
.camera-help li {
  margin-bottom: 0.7em;
}
</style> 