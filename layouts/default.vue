<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :rail="miniVariant"
      rail-width="80"
      app
    >
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          color="primarybg"
          :key="i"
          class="pl-3 mt-2 ml-2 mb-6"
          style="border-radius: 15px; width: 50px; height: 50px"
          :to="item.to"
          @click="handleRoute(i)"
        >
          <v-icon
            :icon="item.icon"
            size="large"
            :color="[(item.state === 'active')?'bggreen':'grey']"
          ></v-icon>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-divider></v-divider>
        <div class="pl-1">
          <v-btn :icon="mdiHomeOutline" variant="plain" size="x-large"> </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar
      class="d-flex align-center px-8 py-2 elevation-0 right-window"
      style="border-bottom: 1px solid var(--palette-neutral-90, #e1e3e2)"
    >
      <h2 class="app-title">Business Unit Management</h2>
      <v-spacer />

      <v-btn
        variant="outlined"
        class="border rounded-xl bg-white account_btn"
        size="large"
        style="background-color: white"
      >
        <template v-slot:prepend>
          <v-icon :icon="mdiAccountCircleOutline" size="x-large"></v-icon>
        </template>
        <div class="container">
          <p style="font-size: 10px">Nivea</p>
          <p style="font-size: 8px">Keta</p>
        </div>
        <template v-slot:append>
          <v-icon :icon="mdiChevronDown" size="x-large"></v-icon>
        </template>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-0">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "pinia";
export default {
  name: "DefaultLayout",
  data() {
    return {
      drawer: true,

      miniVariant: true,
      right: true,
      rightDrawer: false,
    };
  },
  computed: {
    ...mapState(useNavStore, ["items"]),
  },
  methods: {
    ...mapActions(useNavStore, ["updateNavItemState"]),
    handleRoute(i) {
      this.updateNavItemState(i);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column; /* Optional: To arrange items horizontally */
  align-items: flex-start; /* Align items to the start (left) */
}
.account_btn {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
