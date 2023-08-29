<template>
    <div>
        <li v-if="!isDropDown" class="nav-item" :class="{ active: isActive }" @click="handleClickActive" @blur="handleBlur">
            <NuxtLink :to="nameUrl" class="nav-link">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <component :is="iconName" />
                </span>
                <span class="nav-link-title">
                    {{ title }}
                </span>
            </NuxtLink>
        </li>
        <li v-else class="nav-item dropdown" :class="{ active: isActive }" @click="handleClickActive">
            <div class="nav-link dropdown-toggle" :class="{ show: isActive }" data-bs-toggle="dropdown"
                data-bs-auto-close="false" role="button" :aria-expanded="isActive ? true : false">
                <span class="nav-link-icon d-md-none d-lg-inline-block">
                    <component :is="iconName" />
                </span>
                <span class="nav-link-title">
                    {{ title }}
                </span>
            </div>
            <div class="dropdown-menu" :class="{ show: isActive}">
                <div class="dropdown-menu-columns">
                    <div class="dropdown-menu-column">
                        <NuxtLink v-for="menu in subMenu" :to="menu.nameUrl" class="dropdown-item" :class="{ active: isActive}">
                            {{ menu.title }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </li>
    </div>
</template>

<script setup>
const props = defineProps(['subMenu', 'nameUrl', 'title', 'iconName'])
const isActive = ref(false)

const isDropDown = computed(() => {
    return props.subMenu !== null ? true : false
})

function handleClickActive(){
    isActive.value = !isActive.value
    console.log(isActive)
}

function handleBlur(){
    isActive.value = !isActive.value
    console.log(isActive)
}

</script>

<style></style>