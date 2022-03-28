<template>
    <div class="tsView">
        <div>学习</div>
        <ul>
            <li>我爱你啊</li>
            <li>稀罕你啊</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <div class="a">
            我要学习ts
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
        </div>
        <div>
            我要学习传参方法
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TsView',
    setup() {
    function buildName(firstName: string, lastName?: string) {
        return firstName + " " + lastName;
}

let result1 = buildName("Bob");  // works correctly now
console.log(result1)
let result3 = buildName("Bob", "Adams");  // ah, just right
console.log(result3)

        return {

        }
    }
})
</script>

<style lang="scss">
.tsView {
    width: 100%;
    height: 100%;
    background: #FFF;
    .a {
        color: red;
    }
}
</style>