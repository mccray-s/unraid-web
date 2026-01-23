<script lang="ts" setup>
import { computed } from 'vue'

interface Post {
  id: string
  slug: string
  body: string
  data: Record<string, any>
  collection: string
  render: any
}

const props = withDefaults(defineProps<{
  list?: Post[]
}>(), {
  list: () => [],
})

function getHref(post: Post) {
  if (post.data.redirect)
    return post.data.redirect
  return `/posts/${post.slug}`
}

function getTarget(post: Post) {
  if (post.data.redirect)
    return '_blank'
  return '_self'
}

function getYear(date: Date | string | number) {
  return new Date(date).getFullYear()
}

const params = computed(() => {
  if (!props.list)
    return {}
  const groups: Record<string, Post[]> = {}
  props.list.forEach((post) => {
    const year = getYear(post.data.date)
    if (!groups[year])
      groups[year] = []
    groups[year].push(post)
  })
  return groups
})
</script>

<template>
  <div class="max-w-3xl mx-auto py-10">
    <template v-if="!list || list.length === 0">
      <div class="text-neutral-400 text-center py-20">
        nothing here yet.
      </div>
    </template>

    <div v-for="(group, year) in params" :key="year" class="mb-12 slide-enter" :style="{ '--enter-stage': year }">
      <h3 class="text-2xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
        <span class="i-ri-calendar-line text-primary-500" />
        {{ year }}
      </h3>

      <ul class="flex flex-col gap-4">
        <li v-for="post in group" :key="post.data.title" class="group">
          <a
            :href="getHref(post)"
            :target="getTarget(post)"
            class="block p-4 -mx-4 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors duration-200"
          >
            <div class="flex flex-col gap-1">
              <div class="flex items-center justify-between gap-4">
                <span class="text-lg font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {{ post.data.title }}
                </span>

                <span class="text-sm font-mono text-neutral-400 whitespace-nowrap shrink-0">
                  {{ `${post.data.date.split(',')[0].split('/')[0]}/${post.data.date.split(',')[0].split('/')[1]}` }}
                </span>
              </div>

              <div class="flex items-center gap-3 text-sm text-neutral-500">
                <div v-if="post.data.duration" class="flex items-center gap-1">
                  <span class="i-ri-time-line text-xs" />
                  {{ post.data.duration }}
                </div>

                <div v-if="post.data.tag" class="flex items-center gap-1">
                  <span class="i-ri-price-tag-3-line text-xs" />
                  {{ post.data.tag }}
                </div>

                <div v-if="post.data.lang?.includes('zh')" class="badge bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs px-1.5 py-0.5 rounded">
                  中文
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
