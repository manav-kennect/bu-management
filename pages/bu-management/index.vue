<template>
  <Transition :name="opencard?'outside-page':'inside-page'" mode="out-in">
  <v-container v-if="!opencard" fluid fill-height class="pl-0 pt-8">
    <v-row
      class="ml-lg-5 ml-md-5 ml-sm-3 mr-xl-0 mr-lg-0 pl-xl-autp d-flex justify-space-between"
    >
      <v-col cols="auto" class="ml-auto pl-auto">
        <v-text-field
          v-model="searchText"
          cy-data="bu-search"
          density="compact"
          class="rounded-lg border-md search-bar"
          variant="default"
          central-affix
          single-line
          :hide-details="true"
          :prepend-inner-icon="mdiMagnify"
          ><template v-slot:label
            ><div class="input-label">Search</div></template
          ></v-text-field
        >

      </v-col>
      <v-col cols="auto" align-self="center" class="">
        <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn class="bg-btnprimary" data-cy="bu-filter-btn" elevation="0" v-bind="props">
          <div style="text-transform: capitalize; font-weight: bold">
            Filter
          </div>
        </v-btn>
      </template>
      <v-list data-cy="bu-filter-options-list">
        <v-list-item
          v-for="(item, index) in filterOptns"
          :key="index"
          :value="index"
        >
          <v-list-item-title :data-cy="'bus-filter-optns-'+index">{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
       
      </v-col>
      <v-col align-self="center" class="d-flex flex-row-reverse">
        <customDialog :activator="false">
          <template v-slot:toggler="slotProp">
            <v-btn
              class="bg-bggreen rounded-lg"
              data-cy="create-bu-btn"
              elevation="0"
              v-bind="slotProp.activate"
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
    <Transition name="fade-container" mode="out-in">
    <v-row v-if="(searchText.length > 0) && (fiteredCardData.length > 0) || searchText.length===0"
      class="mt-8 ml-lg-0 ml-xl-2 ml-md-5 ml-sm-auto mr-xl-0 mr-lg-3 pl-xl-12" :data-cy="'bu-list-container'"
    >
      <TransitionGroup name="list" mode="out-in" >
        <v-col
          cols="2"
          :sm="3"
          :md="2"
          :lg="2"
          :xl="2"
          class="pl-0 pr-0 ml-lg-9 ml-md-5 ml-xl-2 ml-sm-12 mr-lg-auto mr-xl-auto mt-3"
          v-for="(card, i) in (fiteredCardData.length > 0)
            ? fiteredCardData
            : cardsData"
            :key="i"
          
        >
          <v-card
            class="mx-auto rounded-lg elevation-3"
            width="auto"
            max-width="'600px'"
            min-width="100"
            min-height="240"
            :data-cy="i"
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
      </TransitionGroup>
    </v-row>
   <v-row v-else class="mt-12 ml-lg-0 ml-xl-2 ml-md-5 ml-sm-auto mr-xl-0 mr-lg-3 pl-xl-12 justify-center" :data-cy="'bu-list-container'"><div>No Results Found!</div></v-row>
  </Transition>
  </v-container>
  <SingleCardView v-else :cardDetails="this.cardProps" @handleBackButton="handleBackButton"></SingleCardView>
</Transition>
</template>

<script>
import { mapState, mapActions } from "pinia";
import customDialog from "../../components/common/customDialog.vue";
import CreateBU from "./-components/CreateBU.vue";
import SingleCardView from "./-components/SingleCardView.vue";
import gsap from 'gsap'

export default {
  components: { customDialog, CreateBU, SingleCardView },
  data() {
    return {
      opencard: false,
      searchText: "",
      cardProps: {},
      filterOptns: ['DisplayName','buID','state','No of Managers']
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
    handleBackButton () {
      this.opencard= false;
    },
    onBeforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    onEnter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        delay: el.dataset.index * 0.05,
        onComplete: done,
      });
    },
    onLeave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: '0',
        delay: el.dataset.index * 0.05,
        onComplete: done
      })
    }
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
.input-label {
  color: #8e9191;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 5px;
}

.search-bar {
  width: 372px;
  max-height: 40px;
  font-family: "Poppins";
}

.search-bar .v-field__prepend-inner {
  padding-bottom: 5px;
}

.search-bar .v-input__control {
  max-height: 40px;

}

.search-bar > .v-input__control > .v-field > .v-field__field > .v-field__input {
  max-height: 40px;
  padding-top: 6px;
}


.card_text {
  color: #747877;
}
/* .inner-page-enter-to,
.inner-page-leave-from {
  opacity: 0;
  transform: translateY(-80px);
} */
/* .inside-page-enter-to {
  opacity:1;
  transform: translateY(-100px);
} */
.inside-page-leave-from {
  opacity:1;
}
.inside-page-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.inside-page-leave-active {
  transition: all 0.4s ease-out;
}

.inside-page-leave-from {
  opacity:1;
}

.outside-page-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.outside-page-leave-active {
  transition: all 0.4s ease-out;
}


.list-move,
.list-enter-active {
  transition: all 0.5s ease-out;
}

.list-move,
.list-leave-active {
  transition: all 0.5s ease-out;

}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
} 

.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateX(-10px);
}

.fade-container-enter-from ,
.fade-container-leave-to{
  opacity: 0;
}

.fade-container-enter-to,
.fade-container-leave-from {
  opacity: 1;
}

.fade-container-enter-active,
.fade-container-leave-active {
  transition: all 0.4s ease-in;
}


</style>
