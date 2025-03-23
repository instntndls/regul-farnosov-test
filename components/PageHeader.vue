<template>
  <header>
    <div
      v-if="!$viewport.isLessThan('tablet')"
      class="w-full h-[64px] bg-[#FFF7EB] flex items-center justify-between px-8"
    >
      <a href="/products" class="w-[156px] h-[48px] flex items-center pl-2">
        <h1
          class="text-[28px] font-semibold leading-[28px] font-['Noto_Serif']"
        >
          Annoncé
        </h1>
      </a>

      <v-btn
        class="mr-auto !rounded-full !px-4 !py-3 !h-[48px] !normal-case"
        color="#E8E8E8"
        flat
      >
        <v-img src="@/assets/icons/menu.svg" width="24" height="24" cover />
        <span class="text-[15px] font-medium leading-[24px] text-[#0F0F0F]">
          Все категории
        </span>
      </v-btn>

      <div class="flex items-center justify-between w-[518px] h-[48px]">
        <v-btn
          variant="text"
          class="!px-1.5 !py-1 !rounded-lg !min-w-0"
          color="#0F0F0F"
        >
          <v-icon size="16">mdi-map-marker</v-icon>
          <span class="text-[15px] leading-[24px] ml-1 !normal-case">
            Ростов-на-Дону
          </span>
        </v-btn>

        <div class="w-px h-[32px] bg-[#CCCCCC]" />

        <v-btn
          variant="text"
          class="!px-3 !py-2 !rounded-xl !text-[15px] !font-medium !text-[#337566] !normal-case"
        >
          Разместить объявление
        </v-btn>

        <v-btn
          class="!pl-3 !pr-1 !py-1 !h-[48px] !rounded-full !bg-[#E8E8E8]"
          flat
        >
          <v-icon color="#0F0F0F" size="24">mdi-menu</v-icon>
          <div
            class="w-[40px] h-[40px] rounded-full bg-[#CCCCCC] flex items-center justify-center ml-2"
          >
            <span class="text-[13px] text-[#6B6B6B]">ИФ</span>
          </div>
        </v-btn>
      </div>
    </div>

    <div
      v-else
      class="w-full h-[56px] bg-[#FFF7EB] flex items-center justify-between relative"
    >
      <v-btn variant="text" class="!min-w-0">
        <v-icon class="ml-2" size="24">mdi-menu</v-icon>
      </v-btn>

      <div class="absolute left-1/2 transform -translate-x-1/2">
        <h1
          class="text-[28px] font-semibold leading-[28px] font-['Noto_Serif']"
        >
          Annoncé
        </h1>
      </div>

      <v-btn variant="text" class="!min-w-0 relative mr-2">
        <v-img src="@/assets/icons/cart.svg" width="26" height="26" cover />

      </v-btn>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style></style>
