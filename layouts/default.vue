<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      rail
      permanent
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
          @click="handleRoute(i,item)"
        >
          <v-icon
            :icon="item.icon"
            size="large"
            :color="(item.state === 'active')?'bggreen':'grey'"
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
      class="d-flex align-center pl-9 py-2 elevation-0 right-window"
      style="border-bottom: 1px solid var(--palette-neutral-90, #e1e3e2)"
    >
      <h2 style="font-family: Poppins;" class="pagetitle">{{ pageTitle }}</h2>
      <v-spacer />

      <v-btn
        variant="outlined"
        class=" rounded-xl bg-white account_btn mx-2 px-3"
        size="large"
        style="background-color: white"
      >
        <template v-slot:prepend>
          <v-icon :icon="mdiAccountCircleOutline" size="31"></v-icon>
        </template>
        <div class="container ">
          <p style="font-size: 14px; font-family: Poppins;  font-weight: 400; height: 16px; ">Nivea</p>
          <p style="font-size: 10px; font-family: Poppins; font-weight: 400; color: #575757;" >KDW Admin</p>
        </div>
        <template v-slot:append>
          <v-icon :icon="mdiChevronDown" size="24"></v-icon>
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
      pageTitle: '',
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
    handleRoute(i,item) {  
      this.updateNavItemState(i);  
      this.pageTitle = item.name
    },
  },
  mounted() {
    console.log(this.$route.fullPath)
    const route  = this.$route.name
    this.items.map((item)=>{
        if(item.to === this.$route.fullPath) {
            item.state = 'active'
            this.pageTitle = item.name

        }
    })
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  margin-right: 8px;
}
.account_btn {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  min-height: 48px;
}
</style>
