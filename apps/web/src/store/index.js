import { createStore } from 'vuex'
import user from './modules/user';

export default createStore({
  strict: true,
  modules: {
    user,
  },
});
