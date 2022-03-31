<template>
    <div class="son">
        我是子组件
        <h4>今年{{ age }}岁了</h4>
        <div>
            <Grandson></Grandson>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Grandson from '../grandson/index.vue';

export default defineComponent({
    // eslint-disable-next-line
    name: 'Son',
    props:['age'],
    components:{
        Grandson
    },
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