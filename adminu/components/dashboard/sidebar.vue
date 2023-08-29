<template>
    <div>
        <!-- Sidebar -->
        <aside class="navbar navbar-vertical navbar-expand-lg navbar-transparent">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar-menu"
                    aria-controls="sidebar-menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <h1 class="navbar-brand navbar-brand-autodark">
                    <a href=".">
                        <img src="/static/logo.svg" width="110" height="32" alt="Tabler" class="navbar-brand-image">
                    </a>
                </h1>
                <DashboardSidebarMenu />
            </div>
        </aside>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>