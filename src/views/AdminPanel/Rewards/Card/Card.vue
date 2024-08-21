<template>
    <div :class="`flex flex-col items-center justify-center w-4/6 shadow-lg ${customClass}`">
        
        <div class="flex items-center justify-center w-full py-3 rounded-t-lg bg-primary-900">
            <p class="text-white text-lg font-medium">{{ title }}</p>
       </div>
       
        <div class="flex w-full items-center justify-center py-2.5">
            <p class="font-medium">{{ label }}</p>
       </div>  
       
    </div>
</template>

<script>
export default {
    name:"Card",

    props: {
      title: {
        type: String,
        required: true,
        default: 'default Title'
      },
      label: {
        type: String,
        required: true,
        default: 'default Label'
      },
      customClass: {
        type: String,
        default: ''
      }
    }
}
</script>
