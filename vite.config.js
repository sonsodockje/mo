import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5174",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});

// http://localhost:5174/api?key=6b4345dfb98af5e05bf8ac6e0f693b17&targetDt=20240306
// "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",

// 옵션과 함께: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
// '/api': {
//   target: 'http://jsonplaceholder.typicode.com',
//   changeOrigin: true,
//   rewrite: (path) => path.replace(/^\/api/, '')
// },
