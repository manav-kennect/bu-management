<template>
  <v-card class="mx-auto bg-white rounded-lg" min-width="600" min-height="450">
    <v-card-title class="pl-0 pr-0">
      <div class="d-flex flex-row w-100 h-100 pl-6 pr-4" style="justify-content: space-between; min-height: 43px;">
        <div>Create New Business Unit</div>
        <div>
          <v-btn
            color="inactivebtn"
            style="border-radius:5px;"
            end 
            size="30"
            elevation="0"
            @click="$emit('closeDialog')"
          >
        <v-icon  :icon="mdiClose" size="18"> </v-icon></v-btn>
        </div>
      </div>
      <div>
        <v-divider class="w-100"></v-divider>
      </div>
    </v-card-title>
    <v-card-text>
      <div>
        <div class="d-flex flex-row mb-5">
          <div class="w-50 mr-5">
            <label class="text-label-display">Display Name</label>
            <v-text-field
              variant="default"
              density="compact"
              single-line
              :hide-details="true"
              central-affix
              class="mt-1 h-10 rounded-lg border text-space"
              v-model="newBu.displayName"
            ><template v-slot:label><div class="text-box-label"> Enter Display Name</div></template></v-text-field>
          </div>

          <div class="w-50 mr-0">
            <label class="text-label-display">Business Unit ID</label>
            <v-text-field
            density="compact"
            variant="default"
              single-line
              class="mt-1 h-10 pb-10 rounded-lg border text-space "
              v-model="newBu.buID"
            ><template v-slot:label><div class="text-box-label">Enter ID</div></template></v-text-field>
          </div>
        </div>
        <div class="mt-6">
          <div class="pt-10">
            <label class="text-label-display">Description</label>
            <v-text-field
            variant="default"
              :hide-details="true"
              single-line
              class="mt-1 rounded-lg border description-text-space"
              v-model="newBu.description"
            ><template v-slot:label><div class="text-box-label">Enter Description</div></template></v-text-field>
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <div class="d-flex flex-row-reverse w-100 pr-5 pb-5">
        <div class="w-10">
          <v-btn class="bg-bggreen pl-8 pr-8 rounded-lg" @click="this.saveNewBU()">Save</v-btn>
        </div>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "pinia";
export default {
  emits: ["closeDialog"],
  data() {
    return {
      newBu: { displayName: "", buID: "", description: "", state: "active" },
    };
  },
  methods: {
    ...mapActions(useCardsStore, ["addNewBU"]),
    saveNewBU: function () {
      this.addNewBU(this.newBu);
      this.$emit("closeDialog");
    },
  },
  mounted() {},
};
</script>
<style>

.text-label-display {
    color: #444747;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 12px;
    padding-left: 3px;
}

.text-box-label {
    color:#8E9191;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
}
.text-space {
    max-width: 289px;
    height: 40px;
    font-family: 'Poppins';
}

.text-space .v-input__control {
  max-height: 40px;

}

.text-space > .v-input__control > .v-field > .v-field__field > .v-field__input {
  max-height: 40px;
  padding-top: 6px;
}


.description-text-space {
    min-height: 80px;
}
</style>
