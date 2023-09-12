<template>
  <div class="pt-4 ma-0 bg-tabsbg card-view">
    <div class="d-flex flex-row pa-6 justify-space-between" style="width: 100%">
      <div class="d-flex flex-row">
        <v-icon :icon="mdiChevronLeft" size="xxx-large"></v-icon>
        <v-avatar size="48" color="surface-variant"></v-avatar>
        <div class="d-flex flex-column pl-4 ml-lg-1 mr-3">
          <div class="mb-1" style="font-weight: 600; font-family: 'Poppins'">
            {{ cardDetails["displayName"] }}
          </div>
          <div
            class="font-weight-medium"
            style="font-family: 'Poppins'; font-size: 14px; color: #444747"
          >
            {{ cardDetails["buID"] }}
          </div>
        </div>
        <div class="ml-3 mr-10">
          <v-chip
            :class="[
              'rounded-xl',
              'pl-1',
              'pr-2',
              'pt-3',
              'pb-3',
              cardDetails['state'] === 'active'
                ? 'bg-activebtn'
                : 'bg-inactivebtn',
            ]"
            style="align-self: flex-end"
            density="compact"
            label
            text-color="black"
          >
            <v-icon
              center
              :icon="mdiCircleMedium"
              class="ma-0"
              :color="cardDetails['state'] === 'active' ? 'green' : 'red'"
            ></v-icon>
            <div
              class="text-capitalize font-weight-medium"
              style="font-size: 10px; font-family: 'Poppins'"
            >
              {{ cardDetails["state"] }}
            </div>
          </v-chip>
        </div>
      </div>

      <div class="px-3 pt-0 description_container" style="border: 1px solid #a9acac">
        <!-- <div class="d-inline-block" style="overflow: scroll;"> -->
          
         <p class=" collapse-container"><span class="font-weight-bold">Description:</span>gggggggggggggggggggggggggggggggggggggsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssgggggffffffffffffffffffffbbbbfffffggggggggggggg</p>
        <!-- </div> -->
       
      </div>
      <div class="ml-3 ml-md-1">
        <customDialog
          v-for="(i, index) in [
            mdiBlockHelper,
            mdiPaletteOutline,
            mdiInboxOutline,
            mdiPencilOutline,
          ]"
        >
          <template v-slot:toggler="slotProp">
            <v-icon
              size="20"
              @click=""
              :icon="i"
              class="mr-6"
              v-bind="slotProp.activate"
            ></v-icon>
          </template>
          <template v-slot:default="slotProp">
            <component
              :is="this.buConfigModals[index]"
              :buName="cardDetails['displayName']"
              @closeDialog="slotProp.closeDialog"
            ></component>
          </template>
        </customDialog>
      </div>
    </div>
    <div class="tabs-container">
      <v-tabs
        v-model="tab"
        class="pa-0 ma-0"
        :selected-class="'active-class'"
        :hide-slider="true"
      >
        <v-tab
          v-for="(tabItem, index) in tabs"
          style="max-height: 44px; font-family: Poppins; font-weight: 600"
          :key="tabItem"
          class="mr-2 rounded-lg bg-white ma-0 text-capitalize elevation-1 transition-swing"
          ><div style="color: #444747">
            {{ tabItem }}
          </div></v-tab
        >
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
import { mapState } from "pinia";
import Managers from "./managers/Managers.vue";
import customDialog from "../components/common/customDialog.vue";
import Deactivate from "./Deactivate.vue";
import Employees from './Employees.vue'
export default {
  components: { Managers, customDialog, Employees },
  props: ["cardDetails"],
  data() {
    return {
      tab: null,
      buConfigModals: [Deactivate, null, null, null],
    };
  },
  computed: {
    ...mapState(useTabsStore, ["tabs"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");

.active-class {
  background-color: white;
  border: 1px solid green;
  border-bottom: 3px solid green;
}

.card-view {
  position: relative;
  height: 173px;
  border: 1px solid #ccc;
  padding: 10px;
}

.tabs-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 147px;
  left: 40px;
  padding: 0px;
}

.description_container {
  width: 507px;
  min-width: 300px;
  height: 52px;
  border-radius: 8px;
  margin-left: 200px;
  margin-right: 50px;
  text-overflow: ellipsis;
  overflow: hidden;

}

.collapse-container {
  overflow-wrap: anywhere;
  text-overflow: ellipsis;
}
</style>
