<template>
    <div class="to-params">
        <div class="title">
            <!-- 传参练习
            <p>说明：首先我这里是父组件</p> -->
            <h4>我叫小{{name}}</h4>
            数值：{{ age }}
        </div>
        <div class="subgroup">
            <Son :age="age">1111</Son>
        </div>
        <div class="subgroup">
            <Brother :age="age">2222</Brother>
        </div>
        <div>
            <el-button @click="increment">Default</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, computed} from 'vue';
import { useStore } from 'vuex';
import Son from './components/son/index.vue'
import Brother from './components/brother/index.vue'

export default defineComponent({
    name: 'toParams',
    components:{
        Son,
        Brother
    },
    setup() {
        const store = useStore()
        const name = computed(() => store.state.name)
        let increment = () => {
            store.commit("increment","ai"); // 调用函数，传参
        };
        
        console.log(name)
        let age = ref(18);
        const add = function() {
            age.value++
        }
        provide('age', age)
        return {
            age,
            add,
            name,
            increment
        }
    }
})
</script>

<style lang="scss" scoped>
.to-params {
    width: 100%;
    height: 100%;
    background: #fff;
    .title {
        text-align: center;
        font-weight: 700;
        color: red;
    }
    .subgroup {
        height: 200px;
    }
}
</style>