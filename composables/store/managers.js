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
            let managers_data =  this.managers.find((obj)=>obj.buID === bu_id)
            if(managers_data) {
            return  managers_data;
            }
        }

    }
})