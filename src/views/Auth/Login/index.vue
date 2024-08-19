<template>
  <div class="flex-1 h-screen bg-gradient-to-r from-[#003965] to-95%0% to-[#0073CB]">
    <div class="flex flex-row">
      <div class="flex-1">
        <div class="flex flex-col h-screen items-center justify-center">
          <img src="../../../assets/images/logo.png" alt="" class="w-max scale-90 drop-shadow-lg py-0" />
          <div class="w-full max-w-md space-y-3 px-2">
            <TextInput type="text" label="Matrícula" placeholder="00000" />
            <TextInput type="password" label="Senha" placeholder="Senha" />
            <div class="w-full flex justify-end mt-2">
              <router-link to="/forgotpassword" class="text-sm text-amber-50 hover:underline mt-0">Esqueceu sua senha?</router-link>
            </div>
            <router-link to="/register"> <PrimaryButton class="mt-8" value="Login" custom-color="bg-[#06A6D8]" /></router-link>"
            <div class="w-full flex justify-center mt-1">
              <router-link to="/register" class="text-sm text-amber-50 hover:underline mt-0 -translate-y-5">Não possui cadastro? Clique aqui</router-link>
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
  name: 'Login',
  components: {PrimaryButton, TextInput},
}
</script>