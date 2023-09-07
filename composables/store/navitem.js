import { defineStore } from 'pinia'
export const useNavStore = defineStore('navItems',{
    state(){
        return {items: [
            {
                icon: mdiCompassOutline,
                state: 'inactive',
                to: '/',
            }, {
                icon: mdiCompass,
                state: 'inactive',
                to: '/bu-manager',
            }, {
                icon: mdiCompass,
                state: 'inactive',
                to: '/',
            }, {
                icon: mdiCompass,
                state: 'inactive',
                to: '/',
            },
            {
                icon: mdiCompass,
                state: 'inactive',
                to: '/',
            },
        ]}
    },
    getters: {

    },
    actions: { 
        updateNavItemState(i) {
            this.items.map((item)=>{
                item.state = 'inactive'
            })
            this.items[i].state= 'active'
        }
    }
})