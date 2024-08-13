<template>
  <div class="bg-[#edf8f9]">
    <Sidebar />
    <div class="h-screen">
     <router-view></router-view>
    </div>
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
