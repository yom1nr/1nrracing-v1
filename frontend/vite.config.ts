import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// เปลี่ยนชื่อ repository ของคุณถ้าไม่ได้ใช้ root domain
const repoName = '1nrracing0.1'  

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // important สำหรับ GitHub Pages
  build: {
    outDir: 'dist',       // จะสร้าง dist/ ใน frontend
    emptyOutDir: true     // ลบไฟล์เก่าก่อน build
  },
  server: {
    port: 5173
  }
})
