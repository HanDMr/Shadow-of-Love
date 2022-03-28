<template>
    <div class="father">
        我是父组件
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Father',
    setup() {
        return {
        }
    }
})
</script>

<style lang="scss">
.father {
    width: 100%;
    height: 100%;
    background: #4e5f4d;
}
</style>