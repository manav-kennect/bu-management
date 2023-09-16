import { defineStore } from 'pinia'
import {managersData} from '../../utility/managers-data'
export const useManagerStore = defineStore('managers',{
    state(){
        return {managers: managersData,filteredMangers: []}
    },
    getters: {
       
    },
    actions: { 
        getManagersByBUID(bu_id) {
            return  this.managers.find((obj)=>obj.buID === bu_id);
           
        }

    }
})