import { createSlice } from "@reduxjs/toolkit";

interface OpenModalState {
  isOpenOrderModal: boolean;
  isOpenLoginModal: boolean;
}

const initialState: OpenModalState = {
  isOpenOrderModal: false,
  isOpenLoginModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openOrderModal: state => {
      state.isOpenOrderModal = true;
    },
    closeOrderModal: state => {
      state.isOpenOrderModal = false;
    },
    openLoginModal: state => {
      state.isOpenLoginModal = true;
    },
    closeLoginModal: state => {
      state.isOpenLoginModal = false;
    },
  },
});

export const {
  openOrderModal,
  closeOrderModal,
  openLoginModal,
  closeLoginModal,
} = modalSlice.actions;
export default modalSlice.reducer;
