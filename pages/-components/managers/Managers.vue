<template>
  <v-container fluid class="mt-12 ml-5" style="min-height: 430px">
    <v-row class="" style="min-height: inherit">
      <v-col style="max-width: 340px" class="ml-1">
        <v-row class="manager-container" justify="space-between">
          <v-col cols="9" class="ma-0">
            <v-select
              variant="solo"
              single-line
              flat
              density="compact"
              style="font-family: 'Poppins'; font-weight: 600"
              :items="['All Managers', 'Employee', 'Adhoc Users']"
              label="Select Managers"
              v-model="managerSelector"
            ></v-select>
          </v-col>
          <v-col cols="3" class="pt-5 pr-5 d-flex justify-end">
            <v-icon :icon="mdiPlus" density="compact" end size="small"></v-icon>
          </v-col>
        </v-row>
        <v-row class="managers-list mt-10 ">
          <v-card
            class="ml-0  mr-5 pa-0 w-100 overflow-y-auto manager-list-scroll "
            elevation="0"
            max-height="50vh"
          >
            <v-list class="pt-0 overflow-y-auto ">
              <v-list-item
                v-for="(item, i) in [1, 2, 3, 4, 5, 67, 7, 8, 9, 2, 3, 4, 5]"
                :key="i"
                :value="item"
                class="rounded-lg pt-2 mb-4"
              >
                <div class="d-flex flex-row pl-4">
                  <div class="mr-4 align-self-center">
                    <v-avatar size="38" color="surface-variant"></v-avatar>
                  </div>
                  <div>
                    <div
                      class="font-weight-bold"
                      style="font-size:14px'; font-family:'Poppins'"
                    >
                      Manager Name
                    </div>
                    <div class="">{{ item }}</div>
                  </div>
                </div>
              </v-list-item>
            </v-list>
          </v-card>
        </v-row>
      </v-col>
      <v-col class="mr-10 bg-tonalbg">
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
                    Manager Name
                  </div>
                  <div class="">item</div>
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
        <v-row> </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      managerSelector: "All Managers",
    };
  },
  watch: {
    managerSelector() {
      console.log(this.managerSelector);
    },
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
  background: rgb(25,25,25);
    border: 1px solid rgb(0,0,0);
    max-width: 2px;
  border-radius: 8px;
}
</style>
