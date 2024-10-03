<template>
    <div class="min-h-screen flex flex-col lg:flex-row bg-gradient-to-r from-[#003965] to-[#0073CB]">
        <div class="flex-1 flex flex-col justify-center items-center px-4 lg:px-0 py-8 lg:py-0">
            <img src="../../../assets/images/logo.png" alt="Logo" class="w-1/4 lg:w-2/12 drop-shadow-lg mb-8" />
            <div class="w-full max-w-md space-y-4 px-5">
                <TextInput type="text" label="Matrícula" placeholder="00000" />
                <TextInput type="text" label="Email" placeholder="E-mail" />
                <TextInput type="text" label="CPF" placeholder="CPF" />
                <TextInput type="password" label="Senha" placeholder="Senha" />
                <TextInput type="password" label="Confirmar Senha" placeholder="Confirmar Senha" />
                <router-link to="/home/overview">
                    <PrimaryButton class="w-full mt-8 bg-blue-500 py-3" value="Login" />
                </router-link>
                <div class="w-full flex justify-center">
                    <router-link to="/" class="text-sm text-amber-50 hover:underline -translate-y-5 mt-3">Possui login? Clique aqui</router-link>
                </div>
           </div>
        </div>
        <div class="flex-1 hidden lg:block">
          <img src="../../../assets/images/prefeitura.png" alt="Prefeitura" class="w-full h-full object-cover" />
        </div>
    </div>
</template>

<script>
import TextInput from "@/components/Inputs/TextInput.vue";
import PrimaryButton from "@/components/Buttons/PrimaryButton.vue";

export default {
  name: 'Register',
  components: { PrimaryButton, TextInput },
};
</script>
