import React from 'react';

export type Character = {
  name: string;
  origin: string;
  purpose: string;
  images: {
    main: string;
    agree: string;
    disagree: string;
  };
  outcomes: {
    success: string;
    failure: string;
  };
};

export type Decision = 'none' | 'positive' | 'negative';

export type CharacterContextType = {
  character: Character;
  decision: Decision;
  setDecision: React.Dispatch<React.SetStateAction<Decision>>;
}