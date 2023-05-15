<template>
    <div class="grid grid-cols-1 md:grid-cols-4 bg-slate-200">
        <SectionLeftSideBar/>
        <div class="col-span-1 md:col-span-2 px-4 order-first md:order-none">
            <SectionNavBar />
            <slot />
            <div class="bg-green-300 text-2xl py-2 my-2">
            Want to Create Subtitles for Your Videos for Free? Visit <NuxtLink class="font-bold text-blue-700" to="https://captioncreator.cc?utm_source=easysolutionshq&utm_medium=banner&utm_campaign=easysolutionshq">CaptionCreator.cc</NuxtLink>
          </div>
            <SectionFooter />
        </div>
        <SectionRightSideBar/>
    </div>
  </template>  