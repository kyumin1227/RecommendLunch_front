import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import restaurents from "../data/RestaurentData.js";
import { RestaurentType } from "../types/RestaurentTypes";

type ChangeOptionSizePayload = {
  id: number;
  optionSize: number;
};

export const restaurentSlice = createSlice({
  name: "restaurent",
  initialState: restaurents as RestaurentType[],
  reducers: {
    changeOptionSize: (state, action: PayloadAction<ChangeOptionSizePayload>) => {
      const { id, optionSize } = action.payload;
      const index = state.findIndex((restaurent) => restaurent.id === id);
      if (index !== -1) {
        state[index].optionSize = optionSize;
      }
    },
  },
});

export const { changeOptionSize } = restaurentSlice.actions;

export default restaurentSlice.reducer;
