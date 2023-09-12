<template>
    <div> <v-data-table  :headers="headers"  :items="items" >
        
    </v-data-table></div>
</template>

<script>
    export default {
        props: ["headers",'items','tabletype'],
        data(props) {
            return {
                
            }
        },
        methods: {

        },

    }
</script>

<style>

</style>