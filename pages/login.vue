<template>
  <div class="min-h-screen flex items-center justify-center bg-[#FFF7EB]">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <div class="flex justify-center">
        <h1
          class="text-[28px] font-semibold leading-[28px] font-['Noto_Serif']"
        >
          Annoncé
        </h1>
      </div>
      <form @submit.prevent="handleSubmit">
        <v-text-field
          v-model="login"
          label="Логин"
          variant="outlined"
          density="comfortable"
          class="mb-4"
          :error="loginError"
          :error-messages="loginError ? ['Введите логин'] : []"
          prepend-inner-icon="mdi-account"
        />
        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Пароль"
          variant="outlined"
          density="comfortable"
          class="mb-6"
          :error="passwordError"
          :error-messages="passwordError ? ['Введите пароль'] : []"
          :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="showPassword = !showPassword"
        />
        <v-btn
          type="submit"
          class="w-full !rounded-full !py-3 !h-[48px] !normal-case"
          color="#337566"
          variant="outlined"
        >
          Войти
        </v-btn>
      </form>
    </div>
    <VSnackbar v-model="snackbar" :timeout="3000">
      {{ snackbarMessage }}
    </VSnackbar>
  </div>
</template>

<script setup lang="ts">
const login = ref(''); // логин
const password = ref(''); // пароль
const loginError = ref(false); // ошибка логина
const passwordError = ref(false); // ошибка пароля
const showPassword = ref(false); // видимость пароля
const router = useRouter(); // роутер
const authStore = useAuthStore(); // стор аутентификации

const snackbar = ref(false); // снэкбар
const snackbarMessage = ref(''); // текст снэкбара

const handleSubmit = async () => {
  // проверка логина
  loginError.value = !login.value;
  // проверка пароля
  passwordError.value = !password.value;

  if (!loginError.value && !passwordError.value) {
    // логин
    const success = await authStore.login(login.value, password.value);

    if (success) {
      // переход на страницу продуктов
      navigateTo('/products');
    } else {
      // ошибка логина
      snackbarMessage.value = 'Неправильный логин или пароль';
      // показать снэкбар
      snackbar.value = true;
    }
  }
};
</script>

<style scoped></style>
