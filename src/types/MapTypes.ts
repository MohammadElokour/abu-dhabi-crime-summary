import { ViewState } from "react-map-gl";

export type CViewState = Omit<ViewState, "bearing" | "pitch" | "padding">;
