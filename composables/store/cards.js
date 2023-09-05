import { defineStore } from 'pinia'
import {bu_cards} from '../../utility/cards-data.js'
export const useCardsStore = defineStore('cards',{
    state(){
        return {cardsData: bu_cards,fiteredCardData: []}
    },
    getters: {

    },
    actions: { 
         addNewBU(newBU) {
            this.cardsData.push(newBU)
            console.log(this.cardsData)
        }
    }
})