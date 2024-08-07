<template>
  <div class="bg-[#FBFBFB]">
    <Sidebar />

    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from '../../components/Sidebar/Sidebar.vue'
export default {
  index: 'admin',
  components: {
    Sidebar
  }
}
</script>
