<template>
    <div class="page">
        <Sidebar />
        <slot />
    </div>
</template>

<script setup>
import Sidebar from '/components/dashboard/sidebar.vue'
</script>

<style lang="scss" scoped></style>