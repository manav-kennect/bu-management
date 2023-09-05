<template >
    <v-container fluid class="mt-15 ml-7">
        <v-row>
            <v-col cols="3"  class="bg-white border">
                <v-row>
                    <v-select variant="text" density="compact" :items="['All Managers','Employee','Adhoc Users']" label="Select Managers" v-model="managerSelector"></v-select>
                </v-row> 
                <v-row  no-gutters class="">
                    <v-card class="mx-auto ml-2 mr-1 pa-2" elevation="0">
                <v-list density="compact" class="scheme-list">
                    <v-list-item v-for="(item, i) in [
                        'Manager 2',
                        'Manager 1'
                    ]" :key="i" :value="item" class="rounded-lg" color="primary">
                        <template v-slot:prepend>
                            <v-icon :icon="mdiCircle"></v-icon>
                        </template>
                        <v-list-item-title><div ><div class="bg-red">{{item}}</div><div class="bg-red">{{item}}</div></div></v-list-item-title>
                        <template v-slot:append>
                            <v-icon :icon="mdiCircle"></v-icon>
                        </template>
                    </v-list-item>
                </v-list>
            </v-card>
                </v-row>
            </v-col>
            <v-col cols="9" class="border-lg">
                <v-row>
                    <v-col>

                    </v-col>
                    <v-col>

                    </v-col>
                </v-row>
                <v-row>

                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template >

<script>
export default {
    data() {
        return {
            managerSelector: '',
        }
    },
    watch: {
        managerSelector(){
            console.log(this.managerSelector)
        }
    }
}
</script>
 
<style></style>