<template>
    <div class="flex-1 h-screen bg-gradient-to-r from-[#003965] to-95%0% to-[#0073CB]">
      <div class="flex flex-row">
        <div class="flex-1">
          <div class="flex flex-col h-screen items-center justify-center">
            <img src="../../../assets/images/logo.png" alt="" class="w-3/12 scale-75 drop-shadow-lg py-0" />
            <div class="w-full max-w-md space-y-3 px-2">
                <p class="text-sm text-amber-50">Digite seu e-mail abaixo. Se existir um usuário cadastrado com essa credencial, vamos enviar um código para o e-mail digitado. </p>
              <TextInput type="text" label="Email" placeholder="E-mail" />
              <router-link to="/insertcode"> <PrimaryButton class="mt-8" value="Continuar" custom-color="bg-[#06A6D8]" /></router-link>"
            <div class="w-full flex justify-center mt-1">
              <router-link to="/" class="text-sm text-amber-50 hover:underline -translate-y-5">Possui login? Clique aqui</router-link>
            </div>
            </div>
          </div>
        </div>
        <div class="flex-1 relative hidden lg:block">
          <img src="../../../assets/images/prefeitura.png" alt="" class="w-full h-screen" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TextInput from "@/components/Inputs/TextInput.vue";
  import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";
  
  export default {
    name: 'ForgotPassword',
    components: {PrimaryButton, TextInput},
  }
  </script>