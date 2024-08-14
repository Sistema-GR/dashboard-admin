<template>
  <div class="px-4 sm:px-2 lg:px-4 w-full">
    <div class="mt-6 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th v-for="column in columns" :key="column.key" scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                  {{ column.label }}
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr v-for="person in people" :key="person.email" class="even:bg-gray-50">
                <td v-for="column in columns" :key="column.key" class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  {{ person[column.key] }}
                </td>
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    Edit<span class="sr-only">, {{ person.name }}</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrimaryTable',
  data() {
    return {
      columns: [
        { key: 'name', label: 'Name' },
        { key: 'title', label: 'Title' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
      ],
      people: [
        { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
        { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Member' },
        { name: 'Tom Cook', title: 'Software Engineer', email: 'tom.cook@example.com', role: 'Admin' },
        { name: 'Jane Cooper', title: 'Marketing Manager', email: 'jane.cooper@example.com', role: 'Member' },
        // More people...
      ],
    };
  },
};
</script>
