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
          >Search</v-text-field
        >
      </v-col>
      <v-col cols="5" align-self="center" class="">
        <v-btn class="bg-btnprimary">
          <div style="text-transform: capitalize; font-weight: bold">
            Filter
          </div>
        </v-btn>
      </v-col>
      <v-col align-self="center" class="d-flex flex-row-reverse pr-0 pr-10">
        <customDialog :text="'Create BU'" :activator="false">
          <template v-slot:default="slotProp">
            <CreateBU @closeDialog="slotProp.closeDialog"></CreateBU>
          </template>
        </customDialog>
      </v-col>
    </v-row>
    <v-row class="mt-8 ml-1">
      <v-row class="">
        <v-col
          cols="2"
          :md="2"
          :sm="4"
          class="pl-2 pr-2 ml-6 mr-3 mt-3"
          v-for="(card, i) in fiteredCardData.length > 0
            ? fiteredCardData
            : cardsData"
          :key="i"
        >
          <v-card
            class="mx-auto"
            width="auto"
            max-width="'400px'"
            min-width="230"
            min-height="280"
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
                  start
                  :icon="mdiCircleMedium"
                  :color="card['state'] === 'active' ? 'green' : 'red'"
                ></v-icon>
                {{ card.state }}
              </v-chip>
              <v-icon size="100" :icon="mdiDomain"></v-icon>
            </div>
            <v-card-text>
              <div class="font-weight-bold ms-1 mb-2">
                <div style="font-size: 16px" class="font-weight-medium">
                  {{ card.displayName }}
                </div>
                <h5 class="card_text">{{ card.buID }}</h5>
                <div class="mt-2 card_text">4 members</div>
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
.contt {
  display: grid;
}

.search-bar {
  width: 372px;
  height: 40px;
}

.search-bar .v-field__prepend-inner {
  padding-bottom: 5px;
}

.card_text {
  color: #747877;
}
</style>
