<template>
     <div class="flex flex-col items-center justify-start w-full bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <router-link class="w-full" to="info">
                <div class="flex items-center justify-between w-full pb-3 border-b mb-4">
                    <p class="text-lg font-semibold text-gray-700">Aberto</p>
                    <p class="text-sm text-gray-500">01/02/2023</p>
                </div>

                <div class="flex w-full gap-4">
                    <div class="p-2 bg-gray-100 rounded-lg">
                        <UserIcon class="w-16 h-16 text-gray-400"/>
                    </div>

                    <div class="flex flex-row items-center justify-between w-full">
                        <div class="flex flex-col gap-2">
                            <p class="text-base font-medium text-gray-800">Matheus Gabriel Grawe</p>
                            <p class="text-sm text-gray-600">Erro no processamento do pagamento</p>
                        </div>

                        <div class="flex flex-col items-end gap-2">
                            <div> 
                                <Badges text="Formação" />
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
</template>

<script>
import { UserIcon } from "@heroicons/vue/24/outline";
import Badges from "@/components/Badges/Badges.vue";

export default {
    name: "infoCard",
    components: {UserIcon, Badges},
    props: {
        situation:{
            type: String,
        }
    }
}
</script>
