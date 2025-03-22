<template>
  <div class="min-h-screen flex items-center justify-center bg-[#FFF7EB]">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <!-- Логотип -->
      <div class="flex justify-center">
        <h1 class="text-[28px] font-semibold leading-[28px] font-['Noto_Serif']">Annoncé</h1>
      </div>
      <!-- Форма авторизации -->
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/auth';

const login = ref('');
const password = ref('');
const loginError = ref(false);
const passwordError = ref(false);
const showPassword = ref(false);
const router = useRouter();
const authStore = useAuthStore();

const snackbar = ref(false);
const snackbarMessage = ref('');

const handleSubmit = async () => {
  loginError.value = !login.value;
  passwordError.value = !password.value;

  if (!loginError.value && !passwordError.value) {
    const success = await authStore.login(login.value, password.value);

    if (success) {
      router.push('/');
    } else {
      snackbarMessage.value = 'Неправильный логин или пароль';
      snackbar.value = true;
    }
  }
};

</script>

<style scoped>
/* Переопределение стилей Vuetify */
.v-text-field {
  font-family: 'Inter', sans-serif !important;
}
.v-btn {
  font-family: 'Inter', sans-serif !important;
}
</style>