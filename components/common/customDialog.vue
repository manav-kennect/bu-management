<template>
  <v-dialog v-model="addStreamsDialog" width="auto" persistent data-cy="create-bu-dialog">
    <template v-slot:activator="{ props }">
      <!-- <div>{{ props['aria-expanded'] }}</div> -->
      <slot name="toggler" :activate="props"></slot>
    </template>
    <slot name="default" :closeDialog="closeDialog"></slot>
  </v-dialog>
</template>

<script>
export default {
  props: { activator: Boolean },
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
