<template>
  <div class="pt-4 ma-0 bg-tabsbg card-view">
    <div class="d-flex flex-row pa-8 justify-space-between">
      <div><v-icon :icon="mdiChevronLeft" size="xxx-large"></v-icon></div>
      <div class="ml-1 mr-2">
        <v-avatar size="48" color="surface-variant"></v-avatar>
      </div>
      <div class="d-flex flex-column ml-2 mr-3">
        <div class="mb-1">
          {{ cardDetails["displayName"] }}
        </div>
        <div>
          {{ cardDetails["buID"] }}
        </div>
      </div>
      <div class="ml-3 mr-10">
        <v-chip
          :class="[
            'rounded-xl',
            'pl-2',
            'pr-2',
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
            start
            :icon="mdiCircleMedium"
            :color="cardDetails['state'] === 'active' ? 'green' : 'red'"
          ></v-icon>
          {{ cardDetails["state"] }}
        </v-chip>
      </div>
      <div class="border pa-2 description_container">
        <span class="d-inline-block text-truncate d-flex flex-row"
          ><div class="font-weight-bold">Description:</div>
          ggggggggggggggggggggggggggggggggggggggggggfffffffffffffffffffffffffggggggggggggg</span
        >
      </div>
      <div class="ml-6">
        <v-icon
          :icon="mdiChevronLeft"
          size="large"
          v-for="i in [1, 2, 3, 4]"
          class="mr-2"
        ></v-icon>
      </div>
    </div>
    <div class="tabs-container">
      <v-tabs
        v-model="tab"
        class="pa-0 ma-0"
        :selected-class="'active-class'"
        :hide-slider="true"
        variant="outlined"
      >
        <v-tab
          v-for="(tabItem, index) in tabs"
          style="max-height: 40px"
          :key="tabItem"
          variant="outlined"
          class="mr-2 rounded-lg bg-white ma-0"
          >{{ tabItem }}</v-tab
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
export default {
  components: { Managers },
  props: ["cardDetails"],
  data() {
    return {
      tab: null,
    };
  },
  computed: {
    ...mapState(useTabsStore, ["tabs"]),
  },
};
</script>

<style>
.active-class {
  background-color: white;
  border: 1px solid green;
  border-bottom: 3px solid green;
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
  position: absolute;
  /* Position the div absolutely */
  top: 130px;
  left: 40px;
  /* Align the div to the left of the container */
  /* Make the div span the full width of the container */
  /* Add a background color for visibility */
  padding: 0px;
}

.description_container {
  max-width: 507px;
  border-radius: 8px;

  margin-left: 220px;
  margin-right: 100px;
}
</style>
