<template>
    <div class="pt-4 ma-0 bg-purple card-view" >
        <div>
            hiiii
        </div>
       <div class="tabs-container" >
        <v-tabs  v-model="tab"
          class="pa-0 ma-0"
          :selected-class="'active-class'"
          :hide-slider="true"
          variant="outlined"
          >
            <v-tab v-for="(tabItem, index) in tabs"
            style="max-height: 40px"
            :key="tabItem"
            
            variant="outlined"
            class="mr-2 rounded-lg bg-white  ma-0">{{ tabItem }}</v-tab>
        </v-tabs>
       </div>
    </div>
    <div>
        <Transition>
        <component :is="this.tabs[tab]"></component>
        </Transition>
    </div>
</template>

<script>
import {mapState} from 'pinia';
import Managers from './managers/Managers.vue'
export default {
    components: {Managers},
    data() {
        return{
            tab: null,
        }
    },
    computed: {
        ...mapState(useTabsStore,['tabs'])
    },
   
}
</script>

<style>
.active-class {
  background-color: white;
  border: 2px solid green;
}

.card-view {
  position: relative; 
  height: 150px;
  border: 1px solid #ccc; 
  padding: 10px; 
}

.tabs-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute; /* Position the div absolutely */
  top: 130px;
  left: 40px; /* Align the div to the left of the container *//* Make the div span the full width of the container *//* Add a background color for visibility */
  padding: 0px;  
}
</style>