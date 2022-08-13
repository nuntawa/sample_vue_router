import { createApp } from 'vue'
import App from './App.vue'
//import function  จาก vue-router 
import { createRouter, createWebHistory } from "vue-router";

//import component ที่จะแสดงสำหรับ path ต่างๆ
import Page1 from "@/components/page1-component.vue";
import Page2 from "@/components/page2-component.vue";

//กำหนด path เมื่อผู้ใช้เข้ามาว่าจะให้ไปแสดงที่ component ไหน
const routes=[
    { path: "/", component: Page1 },//หน้า แรก
    { path: "/page1", component: Page1  },
    { path: "/page2", component: Page2 },
    { path: "/page2/:param?", component: Page2 },//กรณีมีการส่งค่า parameter ไปด้วย
    { path: "/:pathMatch(.*)", component: Page1 },//กรณีไม่พบหน้าไหนเลย
];

//สร้าง object router โดยมี path ตามที่กำหนด
const router = createRouter({
    "history": createWebHistory(),
    "routes":routes
})

createApp(App).use(router).mount('#app')
