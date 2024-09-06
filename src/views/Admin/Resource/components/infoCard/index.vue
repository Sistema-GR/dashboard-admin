<template>
    <div class="flex flex-col items-center justify-start w-full border rounded-lg p-3 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <router-link class="w-full" to="info">
            <div class="flex items-center justify-start w-full pb-2 border-b mb-2">
                <p>{{ situation }}</p>
            </div>
            
            <div class="flex flex-row w-full">

                <div class="border rounded-lg mr-2">
                    <UserIcon class="w-14 h-aut stroke-gray-300"/>
                </div>

                <div class="flex row items-center justify-between w-full text-sm">
                        
                    <div class="flex flex-col gap-4">
                        <p>Matheus Gabriel Grawe</p>
                        <p>Erro no processamento do pagamento</p>
                    </div>

                    <div class="flex flex-col gap-4 items-end">

                            <p>01/02/2023</p>

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
