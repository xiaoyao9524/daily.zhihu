import * as types from './mutation-types'

const mutations = {
  [types.TOGGLE_MENU_SHOW_FLAG] (state) {
    state.menuShowFlag = !state.menuShowFlag;
  }
};

export default mutations;
