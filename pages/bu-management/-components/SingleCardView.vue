<template>
  <div class="d-flex flex-column"  >
    <div class="pt-4 ma-0 bg-tabsbg card-view">
      <div class="d-flex flex-row pa-6 pr-0 justify-space-between" >
        <div class="d-flex flex-row ">
          <v-icon :icon="mdiChevronLeft" size="xxx-large" @click="$emit('handleBackButton')"></v-icon>
          <v-avatar size="48" color="surface-variant"></v-avatar>
          <div class="d-flex flex-column pl-4 ml-lg-1 mr-lg-3 mr-md-0">
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
          <div class="ml-lg-3 ml-md-2 mr-0">
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

        <div
          :class="[
            'pl-3 pr-3',
            'my-lg-80',
            'my-md-0',
            !readMore ? 'description_container' : 'description_container_bloom',
          ]"
          style="border: 1px solid #a9acac"
        >
          <p class="collapse-container">
            <span
              class="font-weight-bold mr-1"
              style="font-family: Poppins; font-size: 14px"
              >Description:</span
            ><span class="read-less"
              >Hi I am manav pathak from Panna (m.p). This look me a very long time to build..If You know any other way then please lemme know<span
                v-if="!readMore"
                style="
                  position: absolute;
                  font-weight: bold;
                  margin-top: 4px;
                  margin-left: 5px;
                  border-bottom: black solid 2px;
                  max-height: 15px;
                "
                ><button
                  style="color: black; font-weight: bold; font-size: 12px;"
                  @click="handleDescription()"
                >
                  view more
                </button></span
              ></span
            ><span :class="[readMore ? 'read-more_active' : 'read-more']"
              >ffsssssssssssg ggggffffffffffffffffb bbbfffffgggggggggggggbhhhjggygy jhhuh hhhhi gyguyussssssssssssssssssss<span
                v-if="readMore"
                style="
                  position: absolute;
                  margin-left: 5px;
                  margin-top: 4px;
                  font-weight: bold;
                  border-bottom: black solid 2px;
                  max-height: 15px;
                "
                ><button
                  style="color: black; font-weight: bold; font-size: 12px;"
                  @click="handleDescription()"
                >
                  view less
                </button></span
              ></span
            >
          </p>
        </div>
        <div class="ml-3 ml-md-1 ">
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
                class="mr-md-5 mr-lg-7 mr-sm-3"
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
            class="mr-3 rounded-lg bg-white ma-0 text-capitalize elevation-1 transition-swing"
          >
            <div style="color: #444747">
              {{ tabItem }}
            </div>
          </v-tab>
        </v-tabs>
      </div>
    </div>
    <div>
      <Transition :name="tabTransition" mode="out-in">
        <component :is="this.tabs[tab]" :buID="cardDetails.buID"></component>
      </Transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import Managers from "./managers/Managers.vue";
import customDialog from "../components/common/customDialog.vue";
import Deactivate from "./Deactivate.vue";
import Employees from "./Employees.vue";
export default {
  components: { Managers, customDialog, Employees },
  props: ["cardDetails"],
  data() {
    return {
      tab: null,
      buConfigModals: [Deactivate, null, null, null],
      tabTransition:'slide-fade',
      readMore: false,
    };
  },
  methods: {
    handleDescription() {
      this.readMore = !this.readMore;
      console.log(this.readMore);
    },
  },
  watch: {
    tab(current, old) {
      (old>current)? this.tabTransition = 'slide-left' : this.tabTransition= 'slide-fade';
    } 
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
  border-bottom: 3px solid #00696C;
}

.card-view {
  width: 100%;
  height: 173px;
  border: 1px solid #ccc;
  padding: 10px;
  padding-right: 0px;
}

.tabs-container {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-end;
  top: 210px;
  left: 125px;
  padding: 0px;
}

.description_container {
  width: 515px;
  min-width: 200px;
  height: 52px;
  border-radius: 8px;
  overflow: auto;
  overflow-y: hidden;
  overflow-x: hidden;
  transition: height 0.5s ease;
  
}

.description_container_bloom {
  width: 515px;
  min-width: 200px;
  height: 100px;
  border-radius: 8px;
  margin-left: 80px;
  margin-right: 80px;
  overflow: auto;
  
  transition: height 0.2s ease;
}

.collapse-container {
  width: auto;
  min-width: 300px;
  height: 92px;
  overflow: hidden;
  padding: 0px 2px 0px 2px;
  display: -webkit-box;
  -webkit-line-break: after-white-space;
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-line;
  -webkit-box-orient: vertical;
  text-transform: capitalize;
}

.read-more {
  display: none;
  min-width: auto;
  width: 490px;
  transition: display 3.0s cubic-bezier(0.455, 0.03, 0.515, 0.955);

  
}

.read-more_active {
  display: auto;
  width: 490px;
  min-width: auto;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #444747;
  transition: display 3.0s cubic-bezier(0.455, 0.03, 0.515, 0.955);

}

.read-less {
  max-height: 35px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #444747;
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(-80px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(80px);
  opacity: 0;
}

.slide-left-leave-from {
  opacity: 1
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100px)
}
.slide-left-leave-active {
  transition: all 0.8s ease-out
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateY(-80px)
}

  
.slide-left-enter-active {
  transition: all 0.4s ease-out
}


</style>
