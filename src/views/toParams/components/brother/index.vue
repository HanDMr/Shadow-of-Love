<template>
    <div class="brother">
        我是兄弟组件
        <h1>我今年{{ age }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    // eslint-disable-next-line
    name: 'Brother',
    props:{
        age: {
            type:Number,
            default(){
                return 0
            }
        }
    },
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
}
</style>