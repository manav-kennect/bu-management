<template>
  <v-container fluid class="mt-12 ml-5 pl-2" style="min-height: 430px">
    <v-row class="" style="min-height: inherit">
      <v-col style="max-width: 340px" class="ml-1">
        <v-row class="manager-container" justify="space-between">
          <v-col cols="9" class="ma-0">
            <v-menu transition="slide-y-transition" elevation="0">
              <template v-slot:activator="{ props }">
                <v-btn   v-bind="props" elevation=0 style="font-family: 'Poppins'; font-weight: 600; font-size: 16px; color:#444747;">
                  {{ managerSelector }}
                  <template v-slot:append>
                    <v-icon :icon="mdiChevronDown" density="compact" end :size="24"></v-icon>
                  </template>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(item, i) in ['All Managers', 'Employee Managers', 'Adhoc Managers']" :key="i">
                  <v-list-item-title @click="onSelectItem(item)" style="font-family: 'Poppins'; font-weight: 600; font-size: 14px;">{{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
          <v-col cols="3" class="pt-4 pr-5 d-flex justify-end">
            <v-icon :icon="mdiPlus" density="compact" end :size="24"></v-icon>
          </v-col>
        </v-row>
        <v-row class="managers-list mt-10">
          <v-card
            class="ml-0 mr-5 pa-0 pl-5 w-100 overflow-y-auto manager-list-scroll"
            elevation="0"
            max-height="50vh"
          >
            <v-list
              class="pt-0  overflow-y-auto"
              width="295"
              v-if="filteredManagersList.length > 0"
            >
              <v-list-item
              :active-class="'selected-class'"
                v-for="(manager, i) in filteredManagersList"
                :key="i"
                :value="manager"
                class=" pt-2 mb-4 "
                @click="viewManager(manager)"
              >
                <div class="d-flex flex-row pl-4">
                  <div class="mr-4 align-self-center">
                    <v-avatar size="38" color="surface-variant"></v-avatar>
                  </div>
                  <div>
                    <div
                      style="font-size:14px'; font-family:'Poppins'; font-weight:500;"
                    >
                      {{ manager.name }}
                    </div>
                    <div
                      style="font-size:14px'; font-family:'Poppins'; font-weight:500; text-transform:capitalize; color:#444747"
                    >
                      {{ manager.role }}
                    </div>
                  </div>
                </div>
              </v-list-item>
            </v-list>
            <v-card-text v-else> Managers List Empty </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col class="mr-10 bg-tonalbg" v-if="selectedManager">
        <v-row>
          <v-col cols="12" class="mt-8">
            <div class="d-flex flex-row justify-space-between pl-4">
              <div class="d-flex flex-row">
                <div class="mr-10 align-self-center">
                  <v-avatar size="60" color="surface-variant"></v-avatar>
                </div>
                <div>
                  <div
                    class="font-weight-bold"
                    style="font-size:16px'; font-family:'Poppins'"
                  >
                    {{ selectedManager.name}}
                  </div>
                  <div class="text-capitalize">{{ selectedManager.role }}</div>
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="mr-2">
                  <v-btn class="bg-btnprimary">
                    <div style="text-transform: capitalize; font-weight: bold">
                      Remove Manager
                    </div>
                  </v-btn>
                </div>
                <div class="ml-2">
                  <v-btn class="bg-btnprimary">
                    <div style="text-transform: capitalize; font-weight: bold">
                      View Policies
                    </div>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-col>
          <v-col> </v-col>
        </v-row>
        <v-row>

        </v-row>
      </v-col>
      <v-col  class="mr-10 " offset="3"  v-else>
        <div>
        No Manager Selected
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useManagerStore } from "~/composables/store/managers";

export default {
  props: ["buID"],
  data() {
    return {
      managerSelector: "All Managers",
      managersObject: {},
      selectedManager: null,
      filteredManagersList: [],
    };
  },
  watch: {
    managerSelector() {
      this.filteredManagersList = this.filterManagers(this.managerSelector);
    },
  },
  computed: {
    ...mapState(useManagerStore, ["managers"]),
  },
  methods: {
    ...mapActions(useManagerStore, ["getManagersByBUID"]),
    filterManagers(managerType) {
      if(this.managersObject.managers) {
      if (managerType === "All Managers") {
        return [
          ...this.managersObject.managers["adhocManager"],
          ...this.managersObject.managers["employeeManager"],
        ];
      } else if (managerType === "Adhoc Managers") {
        return this.managersObject.managers["adhocManager"];
      } else {
        return this.managersObject.managers["employeeManager"];
      }
    }
    else {
      return [];
    }
    },
    viewManager(manager) {
      console.log(manager,"jiiiiiiiiiii")
      this.selectedManager = manager;
    },
    onSelectItem(item) {
      this.managerSelector = item;
    }
  },
  mounted() {
    this.managersObject = this.getManagersByBUID(this.buID);
    this.filteredManagersList = this.filterManagers(this.managerSelector);
    console.log(this.filteredManagersList,"hiiiiiiiiiiiiiiii");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");

.manager-container {
  max-width: inherit;
  max-height: 42px;
}

.managers-list {
  min-width: inherit;
}

.selected-class {
  border-radius:12px
}

.manager-list-scroll {
  mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 17px, black 17px);
  mask-size: 100% 20000px;
  mask-position: left bottom;
  -webkit-mask-image: linear-gradient(to top, transparent, black),
    linear-gradient(to left, transparent 17px, black 17px);
  -webkit-mask-size: 100% 20000px;
  -webkit-mask-position: left bottom;
  transition: mask-position 0.3s, -webkit-mask-position 0.3s;
}

.manager-list-scroll:hover {
  -webkit-mask-position: left top;
}

.manager-list-scroll::-webkit-scrollbar {
  background-color: transparent;
}

.manager-list-scroll::-webkit-scrollbar-track {
}

.manager-list-scroll::-webkit-scrollbar-thumb {
  background: #c4c7c6;
  width: 14px;
  border-radius: 20px;
}

.manager-list-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 25, 25);
  border: 1px solid rgb(0, 0, 0);
  max-width: 2px;
  border-radius: 8px;
}
</style>
