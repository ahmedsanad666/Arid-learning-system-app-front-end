import actions from './actions';

import getters from './getters';

import mutations from './mutations';

export default {
  namespaced:true,
  state() {
    return {
      userId:1,
      token: null,
      // tokenExpiration: null,
      IsAdmin:false
    };
  },
  mutations,
  getters,
  actions,
};
