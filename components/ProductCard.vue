<template>
  <div class="flex flex-col gap-0 items-start w-full">
    <!-- Image Section -->
    <div class="rounded-[20px] w-full h-[322px] relative overflow-hidden">
      <v-img
          v-if="imageSrc"
          :src="imageSrc"
          cover
          class="w-full h-full"
      >
        <!-- Top Right Labels -->
        <div class="absolute top-2 left-2 flex gap-1">
          <!-- Views Label -->
          <div class="bg-[rgba(27,29,34,0.6)] rounded-[12px] px-2 py-1 flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z"
                    fill="#F5F5F5"/>
            </svg>
            <span class="text-[13px] leading-[20px] font-medium text-[#F5F5F5]">750</span>
          </div>

          <!-- Days Label -->
          <div class="bg-[rgba(27,29,34,0.6)] rounded-[12px] px-2 py-1 flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM18 20H6C5.45 20 5 19.55 5 19V9H19V19C19 19.55 18.55 20 18 20Z"
                    fill="#F5F5F5"/>
            </svg>
            <span class="text-[13px] leading-[20px] font-medium text-[#F5F5F5]">2 дня</span>
          </div>
        </div>
      </v-img>

      <div v-else class="absolute inset-0 bg-[#E8E8E8] flex items-center justify-center">
        <span class="text-[13px] leading-[20px] text-[#6B6B6B]">Нет фото</span>
      </div>
    </div>

    <!-- Rest of the component remains the same -->
    <!-- Content Section -->
    <div class="pt-4 flex flex-col gap-0 w-full">
      <!-- Price and Title -->
      <div class="px-1 flex flex-col gap-1 w-full">
        <div class="pb-2 flex gap-4 items-center w-full">
          <div class="flex gap-2 items-center flex-1 overflow-hidden">
            <span class="text-[17px] leading-[20px] font-medium text-[#0F0F0F]">
              {{ price }}
            </span>
          </div>
        </div>
        <p class="text-[15px] leading-[24px] font-medium text-[#0F0F0F] truncate">
          {{ title }}
        </p>
      </div>

      <!-- Divider -->
      <div class="pt-2 w-full">
        <div class="bg-[#E8E8E8] w-full h-px"></div>
      </div>

      <!-- Status Section -->
      <div v-if="status === 'promoted'" class="px-1 pt-3 pb-1 flex flex-col gap-3 w-full">
        <div class="text-[15px] leading-[20px] text-center text-[#337566] h-10 flex items-center justify-center">
          Объявление продвигается
        </div>
      </div>

      <div v-else-if="status === 'promote'" class="px-1 pt-3 pb-1 flex flex-row gap-3 items-center w-full">
        <span class="text-[13px] leading-[18px] text-[#6B6B6B] flex-1">
          Увеличьте количество просмотров
        </span>
        <v-btn
            color="#337566"
            class="!rounded-xl !px-3 !py-2 !min-w-0 !normal-case !text-[15px] !leading-[24px]"
            flat
        >
          <span class="text-[#F5F5F5] font-medium">
            Продвигать
          </span>
        </v-btn>
      </div>

      <div v-else-if="status === 'hidden'" class="px-1 pt-3 pb-1 flex flex-col gap-3 w-full">
        <div class="text-[15px] leading-[20px] text-center text-[#BD3223] h-10 flex items-center justify-center">
          Объявление скрыто
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageSrc?: string
  price: string
  title: string
  status: 'promoted' | 'promote' | 'hidden'
}

defineProps<Props>()
</script>

<style>
/* Глубокое переопределение стилей VBtn */
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