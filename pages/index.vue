<script>
import { convertDate } from "../utils";
export default {
  data() {
    return {
      qc: null,
    };
  },
  methods: {
    async fetch() {
      const { query } = useRoute();
      const { author } = query;
      this.qc = await queryContent("blog")
        .where({ author })
        .sort({ _file: -1, $numeric: true })
        .find();
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<template>
  <section class="py-10 bg-gray-50">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex items-end justify-between">
        <div class="flex-1 text-center lg:text-left">
          <h2
            class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
          >
            Latest from blog
          </h2>
          <p
            class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0"
          >
          </p>
        </div>
      </div>
      <div
        class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:grid-cols-3 lg:max-w-full"
      >
        <div
          v-for="article in qc"
          :key="article._path"
          class="overflow-hidden bg-white rounded shadow"
        >
          <div class="p-5">
            <div class="relative">
              <nuxt-link
                :href="article._path"
                class="block aspect-w-4 aspect-h-3"
              >
                <img
                  class="object-cover w-full h-full"
                  :src="article.img"
                  :alt="doc.title+' poster'"
                  loading="lazy"
                />
              </nuxt-link>
            </div>
            <span
              class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"
            >
              {{ convertDate(article.date) }}
            </span>
            <p class="mt-5 text-2xl font-semibold">
              <nuxt-link :href="article._path" class="text-black">
                {{ article.title }}
              </nuxt-link>
            </p>
            <p class="mt-4 text-base text-gray-600">
              {{ article.description }}
            </p>
            <nuxt-link
              :href="article._path"
              class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
            >
              Continue Reading
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
