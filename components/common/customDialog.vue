<template>
        <v-dialog v-model="addStreamsDialog" width="auto">
            <template v-slot:activator="{ props }">
                <v-btn  class="bg-blue"   v-bind="props">{{ text }}</v-btn> 
            </template>
            <slot name="default" :closeDialog="this.closeDialog"></slot> 
        </v-dialog>
</template>

<script>
    export default {
        props: {text:{type:String,default:''},activator:Boolean}, 
        data(props) {
            return {
                addStreamsDialog: props.activator
        }
    },
        methods: {
            closeDialog() {
                this.addStreamsDialog = false
            }
        }
    }
</script>

<style></style>