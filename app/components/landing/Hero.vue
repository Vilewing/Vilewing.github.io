<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-lg mx-auto',
      links: 'mt-4 flex-col justify-center items-center'
    }"
  >
    <template #headline>
        <UColorModeAvatar
          class="size-32 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
          :light="global.picture?.light!"
          :dark="global.picture?.dark!"
          :alt="global.picture?.alt!"
        />
    </template>

    <template #title>
        {{ page.title }}
    </template>

    <template #description>
        {{ page.description }}

        <img
          src="https://media.tenor.com/BuSEbkm9aAIAAAAi/hi-otag.gif"
          class="mx-auto block h-28 w-32 mt-16 mb-16"
        />
        
        If you want to contact me, you can send an email to: <strong>vilewing7@gmail.com</strong>

    </template>

    <template #links>

      <div class="gap-x-4 inline-flex mt-4">
        <Motion
          v-for="(link, index) of footer?.links"
          :key="index"
        >
          <UButton
            v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
          />
        </Motion>
      </div>
    </template>
  </UPageHero>
</template>
