import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { VDataTable } from 'vuetify/labs/VDataTable';
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      VDataTable,
    },
    defaults:{
        VBtn: {
            style: 'text-transform: capitalize; font-family: Poppins;',
          },
        VTextField: {
            style: 'text-transform: capitalize; font-family: Poppins;',
        },
        VCard: {
            VCardTitle: {
                style: 'font-family: Poppins;font-weight: 400; font-size:19px;'
            },
            VCardText: {
                style: 'font-family: Poppins; font-weight: 400; font-size:16px;'
            }
        }
    },
    theme: {
      themes: {
        light: {
          colors: {
            btnprimary: '#CCE8E8',
            bggreen: '#00696C',
            primary: '#EEEEEE',
            activebtn: '#D4FFE5',
            inactivebtn: '#FFDAD4',
            primarybg: '#009e9b',
            tabsbg: '#D3E3FF',
            tonalbg: '#F5F5F5'
          },
        },
      },
    },

    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
