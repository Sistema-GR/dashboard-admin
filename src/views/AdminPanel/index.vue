<template>
    <Sidebar route="admin-panel" />
    <RouterView></RouterView>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue';

export default{
    name: "AdminPanel",
    components: {Sidebar}
}
</script>