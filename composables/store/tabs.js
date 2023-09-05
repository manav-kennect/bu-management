import { defineStore } from 'pinia'
export const useTabsStore = defineStore('tabs',{
    state(){
        return {tabs:['Managers','Employees','Positiona']}
    },
    getters: {

    },
    actions: {

    }
})