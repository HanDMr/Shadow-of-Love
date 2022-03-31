<template>
    <div class="grandson">
        我是孙组件
        <div>
            我今年{{ age }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

export default defineComponent({
    // eslint-disable-next-line
    name: 'Grandson',
    setup() {
        const age = inject('age')
        return {
            age
        }
    }
})
</script>

<style lang="scss">
.grandson {
    width: 100%;
    height: 100%;
}
</style>