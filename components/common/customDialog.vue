<template>
  <v-dialog v-model="addStreamsDialog" width="auto" persistent>
    <template v-slot:activator="{ props }">
      <v-btn class="bg-bggreen" v-bind="props"
        ><div style="text-transform: capitalize">{{ text }}</div>
        <template v-slot:prepend>
          <v-icon
            :icon="mdiPlus"
            size="x-large"
            density="compact"
            color="white"
          ></v-icon> </template
      ></v-btn>
    </template>
    <slot name="default" :closeDialog="closeDialog"></slot>
  </v-dialog>
</template>

<script>
export default {
  props: { text: { type: String, default: "" }, activator: Boolean },
  data(props) {
    return {
      addStreamsDialog: props.activator,
    };
  },
  methods: {
    closeDialog() {
      this.addStreamsDialog = false;
    },
  },
};
</script>

<style></style>
