<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 flex items-center justify-center overflow-hidden">
        <div class="pointer-events-none fixed inset-0 flex items-center justify-center">
          <TransitionChild
            as="template"
            enter="transform transition ease-out duration-500"
            enter-from="translate-y-full opacity-0"
            enter-to="translate-y-0 opacity-100"
            leave="transform transition ease-in duration-300"
            leave-from="translate-y-0 opacity-100"
            leave-to="translate-y-full opacity-0"
          >
            <DialogPanel class="pointer-events-auto w-full max-w-md mx-4">
              <div class="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="px-4 sm:px-6 py-4 border-b">
                  <div class="flex items-start justify-between">
                    <DialogTitle class="text-base font-semibold leading-6 text-gray-900">Detalhemento do Pagamento</DialogTitle>
                    <div class="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        @click="closeDrawer"
                      >
                        <span class="absolute -inset-2.5" />
                        <span class="sr-only">Close panel</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>

                <div class="relative flex-1 px-4 sm:px-6 py-6">
                  <div class="flex flex-col w-full items-center">
                    <div class="flex w-full justify-between">
                      <p>GR UnidadeMáx</p>
                      <p class="text-gray-500">+R$ 6.446,50</p>
                    </div>
                    <div class="flex w-full justify-between border-b-2 pb-3">
                      <p>GR RedeMáx</p>
                      <p class="text-gray-500">+R$ 2.216,07</p>
                    </div>
                    <div class="flex w-full justify-between py-1">
                      <p>Total a ser pago</p>
                      <p class="font-medium">+R$ 8.662,50</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const open = ref(false);

function openDrawer() {
  open.value = true;
}

function closeDrawer() {
  open.value = false;
}

defineExpose({ openDrawer, closeDrawer });
</script>
