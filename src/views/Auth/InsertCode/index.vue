<template>
    <div class="flex-1 h-screen bg-gradient-to-r from-[#003965] to-95%0% to-[#0073CB]">
      <div class="flex flex-row">
        <div class="flex-1">
          <div class="flex flex-col h-screen items-center justify-center">
            <img src="../../../assets/images/logo.png" alt="" class="w-3/12 scale-75 drop-shadow-lg py-0" />
            <div class="w-full max-w-md space-y-3 px-2">
                <p class="text-sm text-amber-50">Foi enviado um código de 5 digitos para o e-mail digitado no passo anterior. Por favor, digite o código abaixo. </p>
              <TextInput type="text" label="Código" placeholder="00000" />
              <router-link to="/changepassword"> <PrimaryButton class="mt-8" value="Enviar" custom-color="bg-[#06A6D8]" /></router-link>"
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
    name: 'InsertCode',
    components: {PrimaryButton, TextInput},
  }
  </script>