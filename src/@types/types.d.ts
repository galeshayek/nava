import { ReactNode } from "react";

export type FCC = (props: { children: ReactNode }) => ReactNode

export interface LanguageMap {
    [key: string]: {
        nativeName: string,
        flag: string,
    };
}
export type numberCard = { id: number, number: string, text: string }

export type EmailForm = {
    email: string,
    receiveUpdates: boolean;
};