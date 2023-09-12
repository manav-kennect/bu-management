<template>
    <v-container fluid class="mt-12 ml-5 " style="min-height: 430px">
        <v-row>
            hiiiiiiiiiiiiii
        </v-row>
        <v-row>  
            <BUDataTable :headers="headers" :items="this.items" :tabletype="'Emoployees'"></BUDataTable>
        </v-row>
    </v-container>
</template>

<script>
import BUDataTable from '~/components/common/BUDataTable.vue';
export default {
    components: [BUDataTable],
    data() {
        return {
            headers: [{ key: "Name", align: "start" ,title:"Name"},
                { key: "Territory" },
                { key: "Department" },
                { key: "Sales_Lead" },
                { key: "Level" },
                { key: "Valid_from" },
                { key: "Valid_Till", sortable: false, align: "end" },],
            items: [
                {
                    Name: 1,
                    Territory: "Manav Pathak",
                    Department: "10",
                    Sales_Lead: "5000 Rs",
                    Level: 10,
                    Valid_from: "",
                    Valid_Till: ''
                }
            ]
        };
    },
    methods: {},
    components: { BUDataTable }
}
</script>

<style></style>