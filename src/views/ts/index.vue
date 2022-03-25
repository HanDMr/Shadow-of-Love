<template>
    <div class="tsView">
        <div class="a">
            我要学习ts
            <el-button>Default</el-button>
            <el-button type="primary">Primary</el-button>
            <el-button type="success">Success</el-button>
            <el-button type="info">Info</el-button>
            <el-button type="warning">Warning</el-button>
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
    background: #4e5f4d;
    .a {
        color: red;
    }
}
</style>