<template>
    <div class="brother">
        我是兄弟组件
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Brother',
    setup() {
        return {
        }
    }
})
</script>

<style lang="scss">
.brother {
    width: 100%;
    height: 100%;
    background: #4e5f4d;
}
</style>