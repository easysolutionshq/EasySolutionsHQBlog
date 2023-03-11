<template>
    <div class="grid grid-cols-1 md:grid-cols-4 bg-slate-200">
        <SectionLeftSideBar/>
        <div class="col-span-1 md:col-span-2 px-4 order-first md:order-none">
            <SectionNavBar />
            <slot />
            <SectionFooter />
        </div>
        <SectionRightSideBar/>
    </div>
  </template>  