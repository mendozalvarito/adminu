<template>
    <div class="collapse navbar-collapse" id="sidebar-menu">
        <ul class="navbar-nav pt-lg-3">
            <DashboardSidebarMenuItem v-for="item in dataMenu" :data="item"/>
        </ul>
    </div>
</template>

<script setup>
import dataMenu from '~/assets/data/menu.ts'

</script>