<template>
  <v-card class="mx-auto bg-white rounded-lg" min-width="636" min-height="252">
    <v-card-title class="pl-0 pr-0">
      <div
        class="d-flex flex-row w-100 h-100 pl-6 pr-4"
        style="justify-content: space-between; min-height: 43px"
      >
        <div>Deactivate Business Unit</div>
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
    <v-card-text>
      Do you want to Deactivate {{ buName }} Business Unit ?
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["buName"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
