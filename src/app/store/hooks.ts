import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store/rootReducer";
import { AppDispatch } from "@app/store/store";

export const useThunkDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
