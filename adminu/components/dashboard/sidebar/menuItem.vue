<template>
    <li class="nav-item" :class="{ active: isActive }">
        <NuxtLink :to="data.nameUrl" class="nav-link" @click="handleClick" @blur="handleBlur">
            <span
                class="nav-link-icon d-md-none d-lg-inline-block"><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                <component :is="data.icon" />
            </span>
            <span class="nav-link-title">
                {{ data.title }}
            </span>
        </NuxtLink>
    </li>
</template>

<script setup>
const props = defineProps(['data'])
const isActive = ref(false)

function handleClick(){
    isActive.value = true
}

function handleBlur(){
    isActive.value = false
}
</script>