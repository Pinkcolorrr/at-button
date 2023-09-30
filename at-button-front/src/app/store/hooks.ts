import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store/rootReducer";
import { AppDispatch } from "@app/store/store";

export const useTypedDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
