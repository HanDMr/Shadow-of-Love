<template>
    <div class="son">
        我是子组件
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Son',
    setup() {
        return {
        }
    }
})
</script>

<style lang="scss">
.son {
    width: 100%;
    height: 100%;
    background: #4e5f4d;
}
</style>