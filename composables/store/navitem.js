import { defineStore } from 'pinia'
export const useNavStore = defineStore('navItems',{
    state(){
        return {items: [
            {
                icon: mdiCompassOutline,
                state: 'inactive',
                name: '',
                to: '/',
            }, {
                icon: mdiDomain,
                name: 'Business Unit Management',
                state: 'inactive',
                to: '/bu-management',
            }, {
                icon: mdiBadgeAccountHorizontalOutline,
                state: 'inactive',
                name: '',
                to: '/',
            }, {
                icon: mdiCogOutline,
                name: '',
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