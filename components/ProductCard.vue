<template>
  <div class="flex flex-col gap-0 items-start w-full">
    <div class="rounded-[20px] w-full h-[322px] relative overflow-hidden">
      <v-img v-if="imageSrc" :src="imageSrc" cover class="w-full h-full">
        <div class="absolute top-2 left-2 flex gap-1">
          <div
            class="bg-[rgba(27,29,34,0.6)] h-8 rounded-[12px] px-2 py-1 flex items-center gap-2"
          >
            <v-img src="@/assets/icons/eye.svg" width="24" height="24" cover />
            <span
              class="text-[13px] leading-[20px] font-medium text-[#F5F5F5]"
              >{{ views }}</span
            >
          </div>
          <div
            class="bg-[rgba(27,29,34,0.6)] h-8 rounded-[12px] px-2 py-1 flex items-center gap-2"
          >
            <v-img src="@/assets/icons/cal.svg" width="24" height="24" cover />
            <span class="text-[13px] leading-[20px] font-medium text-[#F5F5F5]"
              >{{ days }} дня</span
            >
          </div>
        </div>
      </v-img>
      <div
        v-else
        class="absolute inset-0 bg-[#E8E8E8] flex items-center justify-center"
      >
        <span class="text-[13px] leading-[20px] text-[#6B6B6B]">Нет фото</span>
      </div>
    </div>
    <div class="pt-4 flex flex-col gap-0 w-full">
      <div class="px-1 flex flex-col gap-1 w-full">
        <div class="pb-2 flex gap-4 items-center w-full">
          <div class="flex gap-2 items-center flex-1 overflow-hidden">
            <div class="text-[17px] leading-[20px] font-medium text-[#0F0F0F]">
              {{ price.toLocaleString('ru-RU') }} ₽
              <span class="text-[11px] leading-[20px] font-medium text-[#0F0F0F]">
              {{ unit }}
            </span>
            </div>
          </div>
        </div>
        <p
          class="text-[15px] leading-[24px] font-medium text-[#0F0F0F] truncate"
        >
          {{ title }}
        </p>
      </div>
      <div class="pt-2 w-full">
        <div class="bg-[#E8E8E8] w-full h-px" />
      </div>
      <div
        v-if="status === 'promoted'"
        class="px-1 pt-3 pb-1 flex flex-col gap-3 w-full"
      >
        <div
          class="text-[15px] leading-[20px] text-center text-[#337566] h-10 flex items-center justify-center"
        >
          Объявление продвигается
        </div>
      </div>
      <div
        v-else-if="status === 'promote'"
        class="px-1 pt-3 pb-1 flex flex-row gap-3 items-center w-full"
      >
        <span class="text-[13px] leading-[18px] text-[#6B6B6B] flex-1">
          Увеличьте количество просмотров
        </span>
        <v-btn
          color="#337566"
          class="!rounded-xl !px-3 !py-2 !min-w-0 !normal-case !text-[15px] !leading-[24px]"
          flat
        >
          <span class="text-[#F5F5F5] font-medium"> Продвигать </span>
        </v-btn>
      </div>
      <div
        v-else-if="status === 'hidden'"
        class="px-1 pt-3 pb-1 flex flex-col gap-3 w-full"
      >
        <div
          class="text-[15px] leading-[20px] text-center text-[#BD3223] h-10 flex items-center justify-center"
        >
          Объявление скрыто
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  views: number;
  days: number;
  imageSrc?: string;
  price: number;
  unit?: string;
  title: string;
  status: string;
}

defineProps<Props>();
</script>

<style>
.v-btn--variant-flat {
  background-color: #337566 !important;
  border-color: #337566 !important;
}

.v-btn__content {
  font-family: 'Inter', sans-serif !important;
  font-weight: 500 !important;
  letter-spacing: normal !important;
}

.v-btn--size-default {
  --v-btn-height: 40px !important;
}
</style>
