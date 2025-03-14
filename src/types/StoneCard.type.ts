import { StoneType } from "./Stone.type";

export type StoneCardType = {
    card: StoneType;
    isSlab?: boolean
    selectable?: boolean
}