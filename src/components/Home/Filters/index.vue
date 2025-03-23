<script setup>
const searchValue = defineModel('searchValue');
const selectedOption = defineModel('selectedOption')


const sortingValues = [
    {
        value: 'a-z',
        text: 'A-Z'
    },
    {
        value: 'z-a',
        text: 'Z-A'
    },
    {
        value: 'low-high',
        text: 'Price: Low to High'
    },
    {
        value: 'high-low',
        text: 'Price: Higb to Low'
    }
]


</script>

<template>
    <section class="pb-[20px]">
        <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div class="w-full sm:w-auto">
                <label htmlFor="sort" class="block text-sm font-medium text-gray-700 mb-1">
                    Sort by
                </label>
                <div class="relative">
                    <BaseSelect v-model="selectedOption" :options="sortingValues" />
                </div>
            </div>

            <div class="w-full">
                <label htmlFor="search" class="block text-sm font-medium text-gray-700 mb-1">
                    Search
                </label>
                <div class="relative rounded-md shadow-sm">
                    <BaseInput v-model="searchValue" :type="text"
                        class="block w-full rounded-md border-gray-300 pl-3 focus:border-primary focus:ring-primary sm:text-sm border py-2 pr-3 shadow-sm"
                        placeholder="Search products..." />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
