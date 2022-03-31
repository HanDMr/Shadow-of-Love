<template>
    <div class="home">
        <div class="home-header">
            <!-- <h1>学习啊</h1> -->
        </div>
        <div class="home-content">
            <div class="menu-list">
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-vertical-demo"
                    router
                >
                    <el-menu-item
                        v-for="item in MENU_EMUS"
                        :key="item.id"
                        :index="item.route"
                    >{{ item.title }}</el-menu-item>
                </el-menu>
            </div>
            <div class="menu-content">
                <router-view />
            </div>
        </div>
        <div class="home-footer"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MENU_EMUS } from './config'

export default defineComponent({
    //eslint-disable-next-line
    name: 'Home',
    setup() {
        const activeIndex = ref('')
        return {
            MENU_EMUS,
            activeIndex
        }
    }
})
</script>

<style lang="scss">
.home {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .home-header {
        height: 120px;
    }
    .home-content {
        flex: 1;
        display: flex;
        background: #eee;
        .menu-list {
            height: 100%;
            width: 120px;
        }
        .menu-content {
            height: 100%;
            flex: 1;
        }
    }
    .home-footer {
        height: 20px;
    }
}
</style>