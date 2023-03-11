<script>
import { convertDate } from '../utils'
export default{
    props:["type"],
}
</script>
<script setup>
const route = useRoute();
useHead({
  meta: [
    { hid: "og:type", property: "og:type", content: "article" },
    {
      hid: "og:url",
      property: "og:url",
      content: route.path,
    },
  ],
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: route.path,
    },
  ],
});
</script>
<template>
  <main
    class="relative overflow-hidden bg-white py-6 px-6 lg:px-16"
  >
    <nuxt-link
      class="block cursor-pointer"
      :to="'/blog'+type"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="inline h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11 17l-5-5m0 0l5-5m-5 5h12"
        />
      </svg>
      Back
    </nuxt-link>
    <ContentDoc v-slot="{ doc }">
      <h1 class="my-4 text-4xl font-semibold">{{ doc.title }}</h1>
      <p class="my-4 text-gray-500">
        by {{ doc.author }}, {{ convertDate(doc.date) }}
      </p>
      <div
        class="prose prose-lg"
      > 
        <img :src="doc.img" class="w-2/3 pb-4 hidden sm:block" :alt="doc.title+' poster'">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </main>
</template>
