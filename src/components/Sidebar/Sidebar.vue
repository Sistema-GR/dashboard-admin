<!-- Sidebar.vue -->
<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-[#003965] px-6 pb-2 ring-1 ring-white/10 ">
                <div class="flex h-16 shrink-0 mt-5 justify-center items-center border-b-2 border-white">
                  <img class="h-12 w-auto" src="../../assets/images/logo-horinzontal.png" alt="Your Company" />
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in filteredNavigation" :key="item.name">
                          <router-link :to="item.route" :class="[item.current ? 'bg-gray-800 text-white' : 'text-white hover:bg-primary-900 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6']">
                            <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                            {{ item.name }}
                          </router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-[#003965] px-6">
        <div class="flex py-5 shrink-0 items-center justify-center border-b border-white">
          <img class="h-14 w-auto" src="../../assets/images/logo-horinzontal.png" alt="Your Company" />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in filteredNavigation" :key="item.name">
                  <router-link :to="item.route" :class="[item.current ? 'bg-gray-800 text-white' : 'text-white hover:bg-primary-900 hover:text-white', 'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-all duration-200']">
                    <component :is="item.icon" class="h-6 w-6 shrink-0 stroke-white" aria-hidden="true" />
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="-mx-6 mt-auto">
              <a href="#" class="flex items-center gap-x-4 px-6 py-4 text-sm font-semibold leading-6 text-white hover:bg-gray-800">
                <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <span aria-hidden="true">Tom Cook Harris</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-[#003965] px-4 py-4 shadow-sm sm:px-6 lg:hidden">
      <button type="button" class="-m-2.5 p-2.5 text-gray-400 lg:hidden" @click="sidebarOpen = true">
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="flex-1 text-sm font-semibold leading-6 text-white"></div>
      <a href="#">
        <span class="sr-only">Your profile</span>
        <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Bars3Icon, CalculatorIcon, XMarkIcon, ChartBarIcon, UserGroupIcon, UsersIcon, AcademicCapIcon, DocumentTextIcon, CalendarDaysIcon, DocumentCheckIcon, ChartBarSquareIcon } from '@heroicons/vue/24/outline'

const routes = {
  'admin': [
    { name: 'Novo Cálculo', route: '/home/newcal', icon: CalculatorIcon, current: true },
    { name: 'Cálculo Anteriores', route: '/home/previouscal', icon: ChartBarIcon, current: false },
  ],
  'admin-panel': [
    { name: 'Resultados IDEM', route: '/admin/results', icon: CalculatorIcon, current: false },
    { name: 'Profissionais', route: '/admin/professional', icon: UsersIcon , current: false },
    { name: 'Grupos', route: '', icon: UserGroupIcon, current: false },
    { name: 'Frequência', route: '', icon: ChartBarSquareIcon , current: false },
    { name: 'Atividades', route: '', icon: DocumentCheckIcon , current: false },
    { name: 'Tempo de Atuação', route: '', icon: CalendarDaysIcon , current: false },
    { name: 'Formação', route: '', icon: AcademicCapIcon , current: false },
    { name: 'Relatórios Finais', route: '', icon: DocumentTextIcon , current: false },
  ]
}

const props = defineProps({
  route: {
    type: String,
    required: true
  }
})

const sidebarOpen = ref(false)

const filteredNavigation = computed(() => {
  return routes[props.route] || []
})
</script>
