import * as types from './mutation-types'

const mutations = {
  [types.TOGGLE_MENU_SHOW_FLAG] (state) {
    state.menuShowFlag = !state.menuShowFlag;
  },
  [types.SET_IS_OPEN_ARTICLE] (state, flag) {
    state.isOpenArticle = flag;
  },
  [types.TOGGLE_IS_OPEN_ARTICLE] (state) {
    state.TOGGLE_IS_OPEN_ARTICLE = !this.TOGGLE_IS_OPEN_ARTICLE;
  }
};

export default mutations;
