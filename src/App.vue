<template>

    <div class="d-flex bg-primary justify-content-center pt-3 pb-3 fixed-top">
        <div><router-link :to="'/page1'" ><a class="btn btn-lg btn-link text-white text-decoration-none">Page1</a></router-link></div>
        <div><router-link :to="'/page2'"><a  class="btn btn-lg btn-link text-white text-decoration-none">Page2</a></router-link></div>
        <div><router-link :to="'/page2/199'"><a  class="btn btn-lg btn-link text-white text-decoration-none">Page2 with param</a></router-link></div>
    </div>
    <!-- Link ไปหน้าต่างๆ -->
   
    <!-- กำหนดส่วนที่ให้แสดงเนื้อหาจาก component -->
    <router-view></router-view>
</template>

<script setup>

</script>

<style >
/* นำเข้า style จาก bootstrap */
@import "bootstrap/dist/css/bootstrap.min.css";
</style>
