<template>
  <v-menu
    v-model="isOpen"
    :close-on-content-click="false"
    offset-y
    :class="{
      'w-full h-full fixed inset-0 bg-white z-50':
        $viewport.isLessThan('tablet'),
    }"
  >
    <template #activator="{ props }">
      <div
        class="bg-[#EDEDED] border border-[#DBDBDB] w-full rounded-[12px] p-4 flex items-center justify-between cursor-pointer"
        v-bind="props"
      >
        <span
          class="text-[15px] leading-[24px] font-medium text-[#0F0F0F] flex-1"
        >
          {{ selectedOption.name }}
        </span>
        <v-icon>mdi-chevron-down</v-icon>
      </div>
    </template>

    <v-card
      :class="
        $viewport.isLessThan('tablet')
          ? 'w-screen h-screen -mt-3 -mb-3 -ml-3'
          : 'w-full'
      "
      class="relative"
    >
      <div
        v-if="$viewport.isLessThan('tablet')"
        class="m-0 w-full p-4 flex justify-center items-center"
      >
        <span class="text-lg font-medium">Товары и услуги</span>
        <div class="absolute top-0 left-0">
          <v-btn icon flat @click="isOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div class="absolute bottom-12 left-[16px] right-[32px]">
          <v-btn
            color="#337566"
            class="!rounded-xl !px-3 !py-2 !min-w-0 !normal-case !text-[15px] !leading-[24px] w-full min-h-[56px]"
            flat
            @click="isOpen = false"
          >
            <span class="text-[#F5F5F5] font-medium"> Применить </span>
          </v-btn>
        </div>
      </div>

      <v-card-text class="bg-white px-2">
        <v-list>
          <template v-for="(category, index) in groupedOptions">
            <div
              v-if="category.items.length && category.name"
              :key="'category-' + index"
              class="pt-6 pb-2 pl-4"
            >
              <span
                class="text-[13px] leading-[20px] font-medium text-[#6B6B6B]"
              >
                {{ category.name }}
              </span>
            </div>

            <v-list-item
              v-for="(item, itemIndex) in category.items"
              :key="itemIndex"
              @click="selectOption(item)"
            >
              <div class="w-full flex">
                <div>
                  <span class="text-[15px] text-[#0F0F0F] flex-1">
                    {{ item.name }}
                  </span>
                  <span
                    v-if="item.count"
                    class="text-[15px] text-[#6B6B6B] pl-2"
                    >{{ item.count }}</span
                  >
                </div>

                <v-icon
                  v-if="selectedOption === item"
                  class="ml-auto text-[#337566]"
                  small
                  >mdi-check</v-icon
                >
              </div>
            </v-list-item>
          </template>
        </v-list>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
// эмитим событие select
const emit = defineEmits(['select']);

// открыто ли меню
const isOpen = ref(false);
// ширина экрана
const viewport = useViewport();

// группируем опции
const groupedOptions = ref([
  {
    name: null,
    items: [{ name: 'Все товары и услуги', count: null, category: null }],
  },
  {
    name: 'Категория 1',
    items: [
      { name: 'Гробы', count: 5, category: 'Категория 1' },
      { name: 'Урны', count: 12, category: 'Категория 1' },
    ],
  },
  {
    name: 'Категория 2',
    items: [
      { name: 'Тапки', count: 2, category: 'Категория 2' },
      { name: 'Покрывало', count: 1, category: 'Категория 2' },
    ],
  },
]);

// выбранная опция по умолчанию
const selectedOption = ref(groupedOptions.value[0].items[0]);

// выбираем опцию
function selectOption(item) {
  selectedOption.value = item;
  emit('select', item);
  if (!viewport.isLessThan('tablet')) {
    isOpen.value = false;
  }
}

// при монтировании эмитим событие select
onMounted(() => {
  emit('select', selectedOption.value);
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

.v-menu__content {
  box-shadow: 0px 4px 10px 0px rgba(16, 21, 52, 0.1) !important;
  border-radius: 12px !important;
}

.v-card {
  border-radius: 12px !important;
}
</style>
