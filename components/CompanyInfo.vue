<template>
  <div
    v-if="company"
    class="flex flex-col items-center justify-start relative gap-0"
  >
    <div v-if="!$viewport.isLessThan('desktop')" class="flex flex-col items-center justify-center gap-0">
      <v-img
          class="flex-shrink-0 w-[120px] h-[120px] relative rounded-[20px]"
          :src="company?.logo || ''"
          alt="Аватар"
          cover
      />

      <div
          class="pt-[24px] text-left text-[24px] leading-[28px] font-semibold relative text-[#0f0f0f]"
      >
        {{ company?.name || 'Название компании' }}
      </div>

      <div
          class="flex flex-row pt-[12px] gap-1 items-center justify-start flex-shrink-0 w-[360px] relative overflow-hidden"
      >
        <img
            class="flex-shrink-0 w-[16px] h-[16px] relative overflow-visible"
            src="@/assets/icons/verified.svg"
            alt="Премиум"
        />
        <div
            class="text-left text-[15px] leading-[20px] font-normal relative text-[#0f0f0f]"
        >
          Документы проверены
        </div>
        <div
            class="text-left text-[15px] leading-[20px] font-normal relative text-[#0f0f0f]"
        >
          •
        </div>
        <img
            class="flex-shrink-0 w-[16px] h-[16px] relative overflow-visible"
            src="@/assets/icons/star.svg"
            alt="Рейтинг"
        />
        <div
            class="text-left text-[15px] leading-[20px] font-normal relative text-[#0f0f0f]"
        >
          {{ reviews?.averageRating || '4.7' }}
        </div>
        <div
            class="text-left text-[15px] leading-[20px] font-normal relative text-[#0f0f0f]"
        >
          •
        </div>
        <div
            class="text-left text-[15px] leading-[20px] font-normal relative text-[#0f0f0f]"
        >
          {{ reviews?.totalReviews || '19' }} отзывов
        </div>
      </div>

      <v-btn  class="btn-primary" flat @click="handleSelect('about')">
        Показать номер телефона
      </v-btn>
    </div>


    <div
      class="flex sm:w-fit w-screen flex-row overflow-x-scroll px-6 pt-[32px] gap-2 items-start justify-start flex-shrink-0 relative"
    >
      <v-btn
        :class="getTabClass('products')"
        class="tab-btn"
        flat
        @click="handleSelect('products')"
      >
        Товары и услуги
      </v-btn>
      <v-btn
        :class="getTabClass('agents')"
        class="tab-btn"
        flat
        @click="handleSelect('agents')"
      >
        Агенты <span class="!text-[#6b6b6b] ml-2">{{ agentsCount || 5 }}</span>
      </v-btn>
      <v-btn
        :class="getTabClass('about')"
        class="tab-btn"
        flat
        @click="handleSelect('about')"
      >
        О компании
      </v-btn>
    </div>

    <div
      class="flex-shrink-0 w-full border-b border-[#CCCCCC] pt-[16px] relative overflow-hidden"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Аутентификационный стор
const authStore = useAuthStore();
const selectedTab = ref('products');
const company = ref<{ name: string; logo: string } | null>(null);
const reviews = ref<{ averageRating: number; totalReviews: number } | null>(
  null
);
const agentsCount = ref<number | null>(null);

// Функция для получения данных компании
const fetchCompanyData = async () => {
  try {
    const response = await fetch('/api/company', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных компании');
    }

    const data = await response.json();
    company.value = data;
  } catch (error) {
    console.error(error);
  }
};

// Функция для получения данных о отзывах
const fetchReviewsData = async () => {
  try {
    const response = await fetch('/api/reviews', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Ошибка при загрузке данных о отзывах');
    }

    const data = await response.json();
    reviews.value = data;
  } catch (error) {
    console.error(error);
  }
};

// Получение данных при монтировании компонента
onMounted(() => {
  fetchCompanyData();
  fetchReviewsData();
});

// Таб для переключения
const emit = defineEmits(['on-select']);
const handleSelect = (tab: string) => {
  selectedTab.value = tab;
  emit('on-select', tab);
};

// Получить класс для табов
function getTabClass(tab: string) {
  return selectedTab.value === tab ? 'active-tab' : '';
}

onMounted(() => {
  fetchCompanyData();
  fetchReviewsData();
});
</script>

<style scoped>
.btn-primary {
  @apply bg-[#337566] mt-[24px] !normal-case !h-[56px] text-[#f5f5f5] !rounded-[12px] !p-[16px_20px] !flex !items-center !justify-center !text-[15px] !leading-[24px] !font-medium !text-base;
}

.tab-btn {
  @apply bg-[#e8e8e8] !normal-case !rounded-[12px] !p-[8px_12px] !flex !items-center !justify-start !text-[15px] !leading-[24px] !font-medium;
}

.active-tab {
  @apply !normal-case border border-[#0f0f0f] !bg-[#e8e8e8];
}

::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
}
</style>