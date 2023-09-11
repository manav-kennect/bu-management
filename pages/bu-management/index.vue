<template>
  <v-container v-if="!opencard" fluid fill-height class="pl-5 pt-8">
    <v-row class="ml-3">
      <v-col cols="auto">
        <v-text-field
          v-model="searchText"
          central-affix
          density="compact"
          class="rounded-lg border-md search-bar"
          variant="flat"
          single-line
          :hide-details="true"
          :prepend-inner-icon="mdiMagnify"
          style="box-shadow: none"
          ><template v-slot:label
            ><div class="input-label">Search</div></template
          ></v-text-field
        >
      </v-col>
      <v-col cols="5" align-self="center" class="">
        <v-btn class="bg-btnprimary">
          <div style="text-transform: capitalize; font-weight: bold">
            Filter
          </div>
        </v-btn>
      </v-col>
      <v-col align-self="center" class="d-flex flex-row-reverse pr-0 pr-5">
        
        <customDialog :activator="false">
            <template v-slot:toggler="slotProp">
                <v-btn class="bg-bggreen rounded-lg" v-bind="slotProp.activate"
          ><div style="text-transform: capitalize">Create BU</div>
          <template v-slot:prepend>
            <v-icon
              :icon="mdiPlus"
              size="x-large"
              density="compact"
              color="white"
            ></v-icon> </template
        ></v-btn>
            </template>
          <template v-slot:default="slotProp">
            <CreateBU @closeDialog="slotProp.closeDialog"></CreateBU>
          </template>
        </customDialog>
      </v-col>
    </v-row>
    <v-row class="mt-8 ml-1">
      <v-row class=" pl-2 py-auto">
        <v-col
          cols="2"
          :md="2"
          :xl="2"
          class="pl-0 pr-0 ml-7 mr-3 mt-3"
          v-for="(card, i) in fiteredCardData.length > 0
            ? fiteredCardData
            : cardsData"
          :key="i"
        >
          <v-card
            class="mx-auto rounded-lg"
            width="auto"
            max-width="'400px'"
            min-width="100"
            min-height="240"
            @click="viewCard(i, card.buID)"
          >
            <div
              style="height: 150px; align-items: center"
              class="d-flex flex-column bg-primary"
            >
              <v-chip
                :class="[
                  'rounded-xl',
                  'ma-2',
                  'pl-1',
                  'pr-2',
                  'pt-3',
                  'pb-3',
                  card['state'] === 'active'
                    ? 'bg-activebtn'
                    : 'bg-inactivebtn',
                ]"
                style="align-self: flex-end"
                density="compact"
                label
                text-color="black"
              >
                <v-icon
                  center
                  :icon="mdiCircleMedium"
                  :color="card['state'] === 'active' ? 'green' : 'red'"
                ></v-icon>
                <div
                  class="text-capitalize font-weight-medium"
                  style="font-size: 10px; font-family: 'Poppins'"
                >
                  {{ card.state }}
                </div>
              </v-chip>
              <v-icon size="100" :icon="mdiDomain" color="grey"></v-icon>
            </div>
            <v-card-text>
              <div class="font-weight-bold ms-1 mb-2">
                <div
                  style="font-size: 16px; font-family: 'Poppins'"
                  class="font-weight-medium"
                >
                  {{ card.displayName }}
                </div>
                <h5
                  class="card_text font-weight-medium"
                  style="
                    font-size: 14px;
                    color: #a9acac;
                    font-family: 'Poppins';
                  "
                >
                  {{ card.buID }}
                </h5>
                <div
                  class="mt-2 card_text font-weight-medium"
                  style="
                    font-size: 12px;
                    color: #a9acac;
                    font-family: 'Poppins';
                  "
                >
                  4 members
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
  <SingleCardView v-else :cardDetails="this.cardProps"></SingleCardView>
</template>

<script>
import { mapState, mapActions } from "pinia";
import customDialog from "../../components/common/customDialog.vue";
import CreateBU from "../-components/CreateBU.vue";
import SingleCardView from "../-components/SingleCardView.vue";

export default {
  components: { customDialog, CreateBU, SingleCardView },
  data() {
    return {
      opencard: false,
      searchText: "",
      cardProps: "",
    };
  },
  computed: {
    ...mapState(useCardsStore, ["cardsData"]),
    ...mapState(useCardsStore, ["fiteredCardData"]),
  },
  methods: {
    ...mapActions(useCardsStore, ["searchCards"]),
    viewCard(i, id) {
      this.cardProps = this.cardsData.find((obj) => obj["buID"] === id);
      if (this.cardProps) {
        this.opencard = true;
      }
    },

  },
  watch: {
    searchText() {
      console.log("INDES");
      this.searchCards(this.searchText);
      console.log(this.fiteredCardData, "HIIIIIIIIIIIIIIIIII");
    },
  },
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");

.input-label {
  color: #8e9191;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 8px;
}

.search-bar {
  width: 372px;
  height: 40px;
  font-family: "Poppins";
}

.search-bar .v-field__prepend-inner {
  padding-bottom: 5px;
}

.card_text {
  color: #747877;
}
</style>
