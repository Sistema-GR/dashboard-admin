<template>
    <Whiteboard title="" :isSidebarMinimized="isSidebarMinimized">
        <div class="bg-white w-full">
            <div class="flex items-center justify-center w-full px-6 py-24 sm:py-32 lg:px-8 lg:py-">
                <div class="w-full px-10 divide-y divide-gray-900/10">
                    <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900 whitespace-nowrap">Perguntas Frequentes</h2>
                    <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                        <Disclosure as="div" class="pt-6" v-for="faq in faqs" :key="faq.question">
                            <template v-slot="{ open }">
                                <dt>
                                    <DisclosureButton as="button" class="flex w-full items-start justify-between text-left text-gray-900">
                                        <span class="text-base font-semibold leading-7">{{ faq.question }}</span>
                                        <span class="ml-6 flex h-7 items-center">
                                            <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                                            <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" class="mt-2 pr-12">
                                    <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
                                </DisclosurePanel>
                            </template>
                        </Disclosure>
                    </dl>
                </div>
            </div>
        </div>
    </Whiteboard>
</template>

<script>
import { inject } from 'vue'
import Whiteboard from '@/components/Whiteboard/Whiteboard.vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/vue/24/outline';

export default {
    name: "Faqs",
    components: { Whiteboard, Disclosure, DisclosureButton, DisclosurePanel, MinusSmallIcon, PlusSmallIcon },
    data() {
        return {
            faqs: [
                {
                    question: "What's the best thing about Switzerland?",
                    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
                },
                {
                    question: "How do I reset my password?",
                    answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email."
                },
                {
                    question: "Where can I find my order history?",
                    answer: "You can find your order history by going to 'My Account' and selecting 'Order History' from the menu."
                },
                {
                    question: "How long does shipping take?",
                    answer: "Shipping typically takes 5-7 business days, depending on your location."
                },
                {
                    question: "Can I cancel my subscription?",
                    answer: "Yes, you can cancel your subscription at any time by going to your account settings."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept Visa, MasterCard, American Express, and PayPal."
                }
            ]
        }
    },
    setup() {
    const isSidebarMinimized = inject('isSidebarMinimized')

    return {
      isSidebarMinimized
    }
  }
}

</script>
