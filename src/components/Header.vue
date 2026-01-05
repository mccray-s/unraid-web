<script lang="ts" setup>
import { useWindowScroll } from '@vueuse/core'
import { computed, ref, watch } from 'vue'
import siteConfig from '@/site-config'
import { getLinkTarget } from '@/utils/link'
import ThemeToggle from './ThemeToggle.vue'

const navLinks = siteConfig.header.navLinks || []

const socialLinks = computed(() => {
  return siteConfig.socialLinks.filter((link: Record<string, any>) => {
    if (link.header && typeof link.header === 'boolean') {
      return link
    }
    else if (link.header && typeof link.header === 'string') {
      link.icon = link.header.includes('i-') ? link.header : link.icon
      return link
    }
    else {
      return false
    }
  })
})

const { y: scroll } = useWindowScroll()
const isScrolled = computed(() => scroll.value > 20)
const mobileMenuOpen = ref(false)

function toggleNavDrawer() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.overflow = ''
  }
}

watch(mobileMenuOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  }
  else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header
    id="header"
    :class="[
      isScrolled
        ? 'glass-panel mx-4 mt-4 rounded-2xl'
        : 'bg-transparent mx-0 mt-0 rounded-none border-b border-transparent',
    ]"
    class="fixed top-0 z-50 w-full max-w-7xl h-16 px-6 flex justify-between items-center transition-all duration-500 ease-out left-0 right-0 mx-auto"
  >
    <div class="flex items-center gap-4 h-full">
      <a href="/" class="flex items-center gap-2" aria-label="Home">
        <img width="32" height="32" :src="siteConfig.header.logo.src" :alt="siteConfig.header.logo.alt" class="w-8 h-8 rounded-lg shadow-sm">
        <span class="text-lg font-bold hidden sm:block">Unraid Deck</span>
      </a>
    </div>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center gap-6">
      <a
        v-for="link in navLinks"
        :key="link.text"
        :href="link.href"
        :target="getLinkTarget(link.href)"
        class="nav-link text-sm font-medium"
      >
        {{ link.text }}
      </a>
    </nav>

    <!-- Right Actions -->
    <div class="flex items-center gap-4">
      <div class="hidden sm:flex items-center gap-3">
        <a
          v-for="link in socialLinks"
          :key="link.text"
          :href="link.href"
          :target="getLinkTarget(link.href)"
          :class="link.icon"
          class="nav-link text-xl"
          :aria-label="link.text"
        />
        <ThemeToggle />
      </div>

      <!-- Mobile Toggle -->
      <button
        class="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Toggle Menu"
        @click="toggleNavDrawer"
      >
        <div :class="mobileMenuOpen ? 'i-ri-close-line' : 'i-ri-menu-2-line'" class="text-xl" />
      </button>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <Transition name="fade">
    <div v-if="mobileMenuOpen" class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" @click="toggleNavDrawer" />
  </Transition>

  <Transition name="slide-right">
    <nav
      v-if="mobileMenuOpen"
      class="fixed right-0 top-0 bottom-0 z-50 w-64 bg-white dark:bg-neutral-900 shadow-2xl p-6 flex flex-col gap-6 md:hidden border-l border-neutral-200 dark:border-neutral-800"
    >
      <div class="flex justify-between items-center mb-4">
        <span class="font-bold text-lg">Menu</span>
        <button class="p-2 -mr-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100" @click="toggleNavDrawer">
          <div class="i-ri-close-line text-2xl" />
        </button>
      </div>

      <div class="flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.text"
          :href="link.href"
          :target="getLinkTarget(link.href)"
          class="text-lg font-medium text-main hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          @click="toggleNavDrawer"
        >
          {{ link.text }}
        </a>
      </div>

      <div class="mt-auto flex gap-4 border-t border-neutral-200 dark:border-neutral-800 pt-6">
        <ThemeToggle />
        <a
          v-for="link in socialLinks"
          :key="link.text"
          :href="link.href"
          :target="getLinkTarget(link.href)"
          :class="link.icon"
          class="text-2xl text-neutral-500 hover:text-primary-500 transition-colors"
        />
      </div>
    </nav>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
