<template>
  <div class="flex-1 h-screen bg-gradient-to-r from-[#003965] to-95%0% to-[#0073CB]">
    <div class="flex flex-row">
      <div class="flex-1">
        <div class="flex flex-col h-screen items-center justify-center">
          <img src="../../assets/images/logo.png" alt="" class="w-max drop-shadow-lg py-10" />
          <div class="w-3/6 space-y-5">
            <TextInput type="text" label="Matrícula" placeholder="00000" />
            <TextInput type="password" label="Senha" placeholder="Senha" />
          </div>
        </div>
      </div>
      <div class="flex-1 relative hidden lg:block">
        <img src="../../assets/images/prefeitura.png" alt="" class="w-full h-screen" />
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";

export default {
  name: 'Login',
  components: {TextInput},
}
</script>