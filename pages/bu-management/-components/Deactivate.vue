<template>
  <v-card class="mx-auto bg-white rounded-lg" min-width="636" min-height="252">
    <v-card-title class="pl-0 pr-0">
      <div
        class="d-flex flex-row w-100 h-100 pl-6 pr-4"
        style="justify-content: space-between; min-height: 43px"
      >
        <div style="font-family: Poppins; font-size: 19px;">Deactivate Business Unit</div>
        <div>
          <v-btn
            color="inactivebtn"
            style="border-radius: 5px"
            end
            size="30"
            elevation="0"
            @click="$emit('closeDialog')"
          >
            <v-icon :icon="mdiClose" size="18"> </v-icon
          ></v-btn>
        </div>
      </div>
      <div>
        <v-divider class="w-100"></v-divider>
      </div>
    </v-card-title>
    <v-card-text class="">
      Do you want to Deactivate {{ buName }} Business Unit ?
    </v-card-text>
    <v-card-actions>
      <div class="d-flex flex-row justify-space-between w-100 pr-5 pb-5">
        <div class="w-10 ml-5">
          <v-btn class="bg-white pl-8 pr-8 rounded-lg btn-style " variant="outlined" @click="this.saveNewBU()">Cancel</v-btn>
        </div>
        <div class="w-10">
          <v-btn class="bg-bggreen pl-8 pr-8 rounded-lg  btn-style"  @click="this.deactivateCards()">Deactivate</v-btn>
        </div>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions } from 'pinia'
export default {
  props: ["buName","cardData"],
  data() {
    return {};
  },
  methods: {
    ...mapActions(useCardsStore, ["addNewBU"]),
    saveNewBU: function () {
      this.addNewBU(this.newBu);
      this.$emit("closeDialog");
    },
    deactivateCards() {
      console.log(this.cardData)
      this.cardData.state = "inactive"
    }
  },
};
</script>

<style>

.btn-style {
    font-weight: 600;
    font-size: 14px;
}
</style>
