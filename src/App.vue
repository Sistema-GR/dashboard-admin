<template>
  <router-view></router-view>
</template>

<script>
import Login from "./views/Auth/login.vue";
export default {
  components: {
    Login,
  },
};
</script>