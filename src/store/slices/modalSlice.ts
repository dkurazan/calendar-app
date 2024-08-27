import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DateInfo } from "../../utils/types";

const initialState = {
    pickedDate: "",
    open: false,
    position: { x: 0, y: 0 },
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<DateInfo>) => {
            return {
                ...state,
                pickedDate: action.payload.dateStr,
                open: true,
                position: {
                    x: action.payload.jsEvent.pageX,
                    y: action.payload.jsEvent.pageY,
                },
            };
        },
        closeModal: (state) => {
            return { ...state, open: false };
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
