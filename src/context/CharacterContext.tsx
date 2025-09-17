import { createContext, useContext } from "react";
import type { CharacterContextType } from "../types/types";

export const CharacterContext = createContext<CharacterContextType | null>(null);
export const useCharacter = () => {
    const ctx = useContext(CharacterContext);
    if (!ctx) throw new Error("CharacterContext not provided");
    return ctx;
};