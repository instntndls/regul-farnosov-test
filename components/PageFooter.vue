<template>
  <footer class="bg-[#F5F5F5] border-t border-[#DBDBDB]">
    <!-- Desktop Footer -->
    <div v-if="!$viewport.isLessThan('tablet')" class="hidden md:block py-6 px-8">
      <div class="flex gap-5 items-center">
        <span class="footer-link">
          © Annonce 2023
        </span>
        <span class="footer-link">
          Документы
        </span>
        <span class="footer-link">
          О компании
        </span>
      </div>
    </div>

    <!-- Mobile Footer -->
    <div v-else class="md:hidden px-4 py-6">
      <div class="flex flex-col gap-4">
        <span class="text-[15px] leading-[24px] font-medium text-[#0F0F0F]">
          © Annonce 2023
        </span>

        <div class="flex flex-col gap-4 text-[#6B6B6B]">
          <span class="footer-link">Документы</span>
          <span class="footer-link">О компании</span>
          <span class="footer-link">Продавцам</span>
          <span class="footer-link">Покупателям</span>
          <span class="footer-link">Разместить объявление</span>
        </div>

        <!-- Language Selector -->
        <div class="flex items-center gap-1.5 p-1 rounded bg-white mt-4">
          <div class="relative w-4 h-4 overflow-hidden rounded-full border border-[rgba(0,0,0,0.04)]">
            <div class="absolute inset-0">
              <div class="h-1/3 bg-white"/>
              <div class="h-1/3 bg-[#0945E0]"/>
              <div class="h-1/3 bg-[#DB0606]"/>
            </div>
          </div>
          <span class="text-[15px] leading-[24px] text-[#0F0F0F]">Русский</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style>
.footer-link {
  @apply text-[15px] leading-[24px] font-medium text-[#0F0F0F] hover:text-[#337566] cursor-pointer;
}
</style>