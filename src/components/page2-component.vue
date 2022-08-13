<template>
    
    <div class="d-flex flex-column justify-content-center bg-primary flex align-items-center" style="height:300px" >
        <div style="width:400px" class="text-center">
            <h1 class="text-center text-white">Page2</h1>
        </div>
    </div>
    <h2 class="text-center mt-2">{{param}}</h2>
</template>
<script setup>

import { onMounted,ref,watch } from 'vue';
import {useRoute} from "vue-router";

const param=ref("");
const route=useRoute();


onMounted(()=>{
    param.value=route.params["param"];
});

watch(()=>route.params["param"],()=>{
    param.value=route.params["param"];
})

</script>

<style>

</style>