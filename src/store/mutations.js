import * as types from './mutation-types'

const mutations = {
  [types.TOGGLE_MENU_SHOW_FLAG] (state) {
    state.menuShowFlag = !state.menuShowFlag;
  },
  [types.SET_IS_OPEN_ARTICLE] (state, flag) {
    state.isOpenArticle = flag;
  },
  [types.TOGGLE_IS_OPEN_ARTICLE] (state) {
    state.isOpenArticle = state.isOpenArticle;
  },
  [types.SET_THEME_ID] (state, id) {
    state.themeID = id;
  }
};

export default mutations;
