import { atom } from 'jotai';
import { PLANTS_URL } from "@/constants";

export const plantsAtom = atom(async () => {
    const res = await fetch(PLANTS_URL);
    return res.json();
});
