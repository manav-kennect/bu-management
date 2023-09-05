<template>
    <v-container v-if="!opencard" fluid fill-height class=" pl-5 pt-8">
        <v-row class="ml-1">
            <v-col cols="5" sm="3">
                <v-text-field density="compact" class="rounded-lg border-md" variant="" label="Search" single-line :hide-details="true"
                    :prepend-inner-icon="mdiMagnify"></v-text-field>
            </v-col>
            <v-col cols="6" align-self="center" class="">
                <v-btn class="bg-blue">Filter</v-btn>
            </v-col>
            <v-col cols="3" align-self="center" class="mm">
                <customDialog :text="'Create BU'" :activator="false">
                    <template v-slot:default="props">
                        <div class="bg-black">{{ props  }}</div>
                    </template>
                </customDialog>
            </v-col>
        </v-row>
        <v-row  class="mt-8 ml-1">
            <v-row class="">
                <v-col cols="2" :md="2" :sm="4" class="pl-2 pr-2  ml-6 mr-3   mt-3" v-for="i in [1, 2, 34, 4, 5, 6, 7, 8, 4, 2]" :key="i">
                    <v-card class="mx-auto" width="auto" max-width="'400px'" min-width="230" min-height="280"
                        @click="viewCard(i)">
                        <v-img height="150" src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" cover
                            class="text-white">
                            <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                                <template v-slot:append>
                                    <v-btn icon="mdi-dots-vertical"></v-btn>
                                </template>
                            </v-toolbar>
                        </v-img>

                        <v-card-text>
                            <div class="font-weight-bold ms-1 mb-2">Today</div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
    <SingleCardView v-else></SingleCardView>
</template>

<script>
import { mapState } from 'pinia'
import customDialog from '../components/common/customDialog.vue'
import CreateBU from './-components/CreateBU.vue'
import SingleCardView from './-components/SingleCardView.vue'
export default {
    components: { customDialog, CreateBU, SingleCardView },
    data() {
        return {
            opencard: false,
        }
    },
    computed: {
        ...mapState(useCardsStore, ['cardsData'])
    },
    methods: {
        viewCard(i) {
            this.opencard = true;
        },
    },
    mounted() {

    }
}
</script>

<style>
.contt {
    display: grid;
}
</style>
