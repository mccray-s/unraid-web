<script lang="ts" setup>
import siteConfig from '@/site-config'
import { getLinkTarget } from '@/utils/link'
</script>

<template>
  <footer class="w-full mt-18 py-8 text-sm flex flex-col items-center gap-4 text-neutral-500 dark:text-neutral-400">
    <div v-if="siteConfig.footer.navLinks && siteConfig.footer.navLinks.length > 0" class="flex flex-wrap gap-6 justify-center">
      <template v-for="link in siteConfig.footer.navLinks" :key="link.text">
        <a
          :aria-label="`${link.text}`"
          :target="getLinkTarget(link.href)"
          class="nav-link hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          :href="link.href"
        >
          {{ link.text }}
        </a>
      </template>
    </div>
    <div class="flex flex-col md:flex-row items-center gap-2 text-center">
      <span>&copy; {{ new Date().getFullYear() }} {{ siteConfig.author }}. All rights reserved.</span>
    </div>
  </footer>
</template>
