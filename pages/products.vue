<script setup lang="ts">
// Хранилище аутентификации
const authStore = useAuthStore();
const selectedOption = ref('');

// Интерфейс продукта
interface Product {
  id: number;
  image: string;
  price: number;
  unit?: string;
  title: string;
  views: number;
  category: string;
  days: number;
  description?: string;
  status: 'promoted' | 'promote' | 'hidden';
}

// Список всех продуктов
const products = ref<Product[]>([]);
// Отфильтрованный список продуктов
const filteredProducts = ref<Product[]>([]);

// Выбранная вкладка
const selectedTab = ref('products');

// Получение данных о продуктах с сервера
const { data, error, pending } = await useFetch('/api/products', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${authStore.token}`,
  },
});

// Если данные получены, сохраняем их в products
if (data.value) {
  products.value = data.value;
  filteredProducts.value = [];
}

// Если есть ошибка при загрузке, выводим в консоль
if (error.value) {
  console.error('Ошибка при загрузке продуктов:', error.value);
}

// Функция для фильтрации продуктов по категории
const filterProductsByCategory = (category: string | null) => {
  if (!category) {
    filteredProducts.value = products.value;
    return false;
  } else {
    if (category === 'Все товары и услуги') {
      filteredProducts.value = products.value;
    } else {
      filteredProducts.value = products.value.filter(
        (product) => product.category === category
      );
    }
  }
};

// Отслеживаем изменения selectedOption и фильтруем продукты
watch(selectedOption, (newValue) => {
  const selectedCategory = newValue.name;
  filterProductsByCategory(selectedCategory);
});

// При монтировании компонента проверяем токен и перенаправляем на /login при его отсутствии
onMounted(() => {
  authStore.token = import.meta.client ? localStorage.getItem('token') : null;
  if (!authStore.token) {
    navigateTo('/login');
  }
});
</script>

<template>
  <div v-if="authStore.token" class="flex flex-col w-full pb-20">
    <CompanyInfo
      @on-select="selectedTab = $event"
    />
    <div
      class="max-w-[470px] mx-auto h-[104px] flex items-center w-full p-[16px]"
    >
      <SortDropDown @select="selectedOption = $event" />
    </div>
    <div
      class="flex flex-col sm:grid grid-cols-3 xl:grid-cols-4 gap-4 w-full sm:px-[32px] px-[16px]"
    >
      <div v-if="pending">Загрузка...</div>

      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :image-src="product.image"
        :unit="product.unit"
        :views="product.views"
        :days="product.days"
        :price="product.price"
        :title="product.title"
        :status="product.status"
      />
    </div>
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
