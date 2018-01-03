import * as types from './mutation-types'

const mutations = {
  [types.TOGGLE_FLAG] (state) {
    state.flag = !state.flag;
  }
};

export default mutations;
