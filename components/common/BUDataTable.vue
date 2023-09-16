<template>
  <v-container fluid class="mt-12 px-12  w-100" style="min-height: 430px">
    <v-row> hiiiiiiiiiiiiii </v-row>
    <v-row >
      <v-data-table :headers="headers" :items="items" class="border-md rounded-lg" fixed-header :height="'45vh'" :first-page-label="'sssssssssssssssss'">
     <template v-slot:headers="{columns, isSorted, getSortIcon, toggleSort}">
       <tr>
        <template v-for="column in columns" :key="column.key">
            <td>
                
            </td>
        </template>
       </tr>
     </template>   
     </v-data-table
    ></v-row>
  </v-container>
</template>

<script>
export default {
  props: ["headers", "items", "tabletype"],
  data(props) {
    return {};
  },
  methods: {},
};
</script>

<style></style>
