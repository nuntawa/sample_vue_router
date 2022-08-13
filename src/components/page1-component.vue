<template>
    
    <div class="d-flex flex-column justify-content-center bg-primary flex align-items-center" style="height:300px" >
        <div style="width:400px" class="text-center">
            <h1 class="text-center text-white">Page1</h1>
            <button class="btn btn-sm btn-secondary" type="button"
                @click="gotoPage2"
            >
                Goto Page2 with param
            </button>
        </div>
    </div>

</template>
<script setup>
 
import { useRouter } from 'vue-router';
const router=useRouter();
const gotoPage2=()=>{
    router.push("/page2/199");
}

</script>

<style>

</style>