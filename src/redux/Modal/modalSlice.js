const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isShowAuthPage: false,
  isShowBurgerModal: false,
  isCreatePageModal: false,
  // authForm: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleShowAuthPage: (state, { payload }) => {
      state.isShowAuthPage = !state.isShowAuthPage;
      state.authForm = payload;
    },
    toggleShowBurgerModal: (state) => {
      state.isShowBurgerModal = !state.isShowBurgerModal;
    },
    toggleShowCreatePageModal: (state) => {
      state.isShowCreatePageModal = !state.isShowCreatePageModal;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  toggleShowAuthPage,
  toggleShowBurgerModal,
  toggleShowCreatePageModal,
} = modalSlice.actions;
