<template>
<v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :rail="miniVariant"
      rail-width="80"
      app>
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :prepend-icon="item.icon"
          :to="item.to">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="d-flex align-center px-8 py-2 elevation-0 right-window"
      style="border-bottom: 1px solid var(--palette-neutral-90, #e1e3e2)">
      <h2 class="app-title">Business Unit Management</h2>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container fluid class="pa-0">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'explore',
          title: 'Welcome',
          to: '/',
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
    };
  },
  }


</script>

<style>
</style>