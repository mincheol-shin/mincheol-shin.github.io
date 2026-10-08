// 예전 Flutter 버전이 등록한 서비스 워커를 걷어내는 킬 스위치.
// 이전 방문자의 브라우저가 이 경로로 워커 업데이트를 확인하면, 캐시를 지우고 스스로 해제한 뒤 새로고침한다.
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((k) => caches.delete(k)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      for (const client of clients) client.navigate(client.url)
    })(),
  )
})
