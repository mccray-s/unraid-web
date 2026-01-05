<script setup lang="ts">
import { ref } from 'vue'

const screenshots = [
  {
    src: '/images/screenshot-01.jpg',
    alt: 'Unraid Deck Dashboard',
  },
  {
    src: '/images/screenshot-02.jpg',
    alt: 'Docker Container Management',
  },
  {
    src: '/images/screenshot-03.jpg',
    alt: 'Container Details',
  },
  {
    src: '/images/screenshot-04.jpg',
    alt: 'Real-time Logs',
  },
  {
    src: '/images/screenshot-05.jpg',
    alt: 'Storage Array',
  },
  {
    src: '/images/screenshot-06.jpg',
    alt: 'Disk Details',
  },
  {
    src: '/images/screenshot-07.jpg',
    alt: 'Server Management',
  },
  {
    src: '/images/screenshot-08.jpg',
    alt: 'Notifications',
  },
  {
    src: '/images/screenshot-09.jpg',
    alt: 'Settings',
  },
]

const lightboxOpen = ref(false)
const currentIndex = ref(0)
const isLoading = ref(true)

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % screenshots.length
  preloadNext()
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + screenshots.length) % screenshots.length
  preloadNext()
}

function openLightbox(index: number) {
  currentIndex.value = index
  lightboxOpen.value = true
  preloadNext()
}

function preloadNext() {
  isLoading.value = true
  const nextIndex = (currentIndex.value + 1) % screenshots.length
  const img = new Image()
  img.src = screenshots[nextIndex].src
}

function onImageLoad() {
  isLoading.value = false
}
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
        Interface Preview
      </h2>
    </div>

    <!-- Horizontal Scroll Container -->
    <div class="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory scrollbar-hide">
      <button
        v-for="(screenshot, index) in screenshots"
        :key="screenshot.src"
        class="snap-center shrink-0 w-[160px] sm:w-[200px] aspect-[9/19.5] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-lg bg-neutral-100 dark:bg-neutral-800 group relative"
        :aria-label="`View Screenshot ${index + 1}`"
        @click="openLightbox(index)"
      >
        <img
          :src="screenshot.src"
          :alt="screenshot.alt"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          decoding="async"
        >
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </button>
    </div>

    <!-- Lightbox Modal -->
    <Transition name="fade">
      <div v-if="lightboxOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" @click="lightboxOpen = false">
        <div class="relative max-h-full max-w-full flex flex-col items-center" @click.stop>
          <button
            class="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors"
            @click="lightboxOpen = false"
          >
            <div class="i-ri-close-line text-3xl" />
          </button>

          <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          </div>

          <img
            :src="screenshots[currentIndex].src"
            :alt="screenshots[currentIndex].alt"
            class="max-h-[85vh] max-w-full rounded-[2rem] shadow-2xl transition-opacity duration-300"
            :class="{ 'opacity-0': isLoading, 'opacity-100': !isLoading }"
            @load="onImageLoad"
          >

          <!-- Navigation -->
          <button
            class="absolute left-4 md:-left-20 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors"
            @click.stop="prevSlide"
          >
            <div class="i-ri-arrow-left-s-line text-4xl" />
          </button>
          <button
            class="absolute right-4 md:-right-20 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white transition-colors"
            @click.stop="nextSlide"
          >
            <div class="i-ri-arrow-right-s-line text-4xl" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
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

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
