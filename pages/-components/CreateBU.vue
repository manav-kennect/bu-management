<template>
  <v-card class="mx-auto bg-white rounded-lg" min-width="600" min-height="450">
    <v-card-title>
      <div class="d-flex flex-row w-100" style="justify-content: space-between">
        <div>Create New Business Unit</div>
        <div>
          <v-btn
            :icon="mdiClose"
            density="compact"
            color="inactivebtn"
            end
            size="medium"
            @click="$emit('closeDialog')"
          ></v-btn>
        </div>
      </div>
      <div>
        <v-divider></v-divider>
      </div>
    </v-card-title>
    <v-card-text>
      <div>
        <div class="d-flex flex-row mb-5">
          <div class="w-50 mr-5">
            <label>Display Name</label>
            <v-text-field
              variant="outlined"
              label="Enter Display Name"
              single-line
              class="mt-1 h-10"
              v-model="newBu.displayName"
            ></v-text-field>
          </div>

          <div class="w-50 mr-5">
            <label>Business Unit ID</label>
            <v-text-field
              variant="outlined"
              label="Enter ID"
              single-line
              class="mt-1 h-10"
              v-model="newBu.buID"
            ></v-text-field>
          </div>
        </div>
        <div>
          <div>
            <label>Description</label>
            <v-text-field
              variant="outlined"
              label="Enter Description"
              single-line
              class="mt-1"
              v-model="newBu.description"
            ></v-text-field>
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <div class="d-flex flex-row-reverse w-100 pr-5 pb-5">
        <div class="w-10">
          <v-btn class="bg-blue" @click="this.saveNewBU()">Save</v-btn>
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
<style></style>
