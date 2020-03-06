<template>
  <a-layout id="components-layout-demo-custom-trigger" >
    <a-layout-sider
    :trigger="null"
    collapsible
    v-model="collapsed"
  >
  <div class="logo" />
    <side-menu
      :menus="menus"
    >
    </side-menu>
    </a-layout-sider>
    <a-layout style="overflow:auto;">
      <a-layout-header style="background: #fff; padding: 0;min-width:1020px;">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <a-button type="primary" icon="poweroff" @click="logout" style="float:right;margin:16px;">登出</a-button>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px',minWidth: '1000px', }">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="padding: 0px;min-width:1000px;">
        <global-footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
 import SideMenu from '@/components/layouts/SideMenu'
 import GlobalFooter from '@/components/layouts/GlobalFooter'
 import {mapActions} from 'vuex'
 import {filterNoChild} from '@/utils/TreeDataUtil'
  export default {
    name: "GlobalLayout",
    components: {
      SideMenu,
      GlobalFooter
    },
    data(){
      return {
        collapsed: false,
      }
    },
    methods: {
      ...mapActions({
        logout:'user/logout'
      })
    },
    computed :{
      menus(){
        const filterMenus = filterNoChild(this.$store.state.user.menus);
        console.log(filterMenus)
        return this.$store.state.user.menus
      },

    },
    mounted() {
      this.$store.dispatch("user/queryMenus");
    }
  }
</script>
<style>
.ant-layout-header{
  text-align: left;
}
.ant-layout-content{
  text-align: left;
  padding: 0;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>
