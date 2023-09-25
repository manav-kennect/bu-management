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
            console.log(this.cardsData,"HHHHHHHHHHHHH")
            this.cardsData.push(newBU)
            
        },
        searchCards(seachtext) {
           this.fiteredCardData=searchFunc(seachtext,['buID','displayName'],this.cardsData)
            console.log('INSIDE PININA',this.fiteredCardData)
        },
    }
})