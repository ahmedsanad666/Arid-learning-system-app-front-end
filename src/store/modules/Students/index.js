import actions from './actions';

import getters from './getters';

import mutations from './mutations';

export default {
  namespaced:true,
  state() {
   return{
    users:[
      {
        id:1,
        FirstName:'ahmed',
        LastName:'sanad',
        Email:'Ahmedsanad@gmail.com',
        passwork:'123drec',
        role:1,


      },
      {
        id:3,
        FirstName:'mohamed',
        LastName:'abdulla',
        Email:'mohamed@gmail.com',
        passwork:'sdfiebjdsf',
        role:0,


      },
      {
        id:4,
        FirstName:'hamza',
        LastName:'saaid',
        Email:'hamzasaaid@gmail.com',
        passwork:'5edgexx',
        role:0,
      },

    ],
   }
  },
  mutations,
  getters,
  actions,
};
