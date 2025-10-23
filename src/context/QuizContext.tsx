'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

export interface QuizAnswers {
  sign: string;
  signQuestion1: string;
  signQuestion2: string;
  areaOfLife: string;
  decisionPattern: string;
  currentSensation: string;
  overloadMental: string;
  relationshipChallenge: string;
  deepestDesire: string;
  commitment: string;
}

export interface QuizState {
  step: number;
  answers: QuizAnswers;
}

interface QuizContextType extends QuizState {
  setAnswer: (field: keyof QuizAnswers, value: string) => void;
  nextStep: () => void;
  goToStep: (step: number) => void;
  resetQuiz: () => void;
}

const defaultAnswers: QuizAnswers = {
  sign: '',
  signQuestion1: '',
  signQuestion2: '',
  areaOfLife: '',
  decisionPattern: '',
  currentSensation: '',
  overloadMental: '',
  relationshipChallenge: '',
  deepestDesire: '',
  commitment: '',
};

const defaultState: QuizState = {
  step: 1,
  answers: defaultAnswers,
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const STORAGE_KEY = 'cosmic-quiz-state';

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<QuizState>(defaultState);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedState = localStorage.getItem(STORAGE_KEY);
      if (storedState) {
        const parsedState = JSON.parse(storedState);
        // Ensure we don't start on the loading or results page on reload
        if (parsedState.step >= 11) {
            parsedState.step = 1;
            parsedState.answers = defaultAnswers;
        }
        setState(parsedState);
      }
    } catch (error) {
      console.error("Failed to parse state from localStorage", error);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (error) {
        console.error("Failed to save state to localStorage", error);
      }
    }
  }, [state, isInitialized]);

  const setAnswer = useCallback((field: keyof QuizAnswers, value: string) => {
    setState((prevState) => ({
      ...prevState,
      answers: {
        ...prevState.answers,
        [field]: value,
      },
    }));
  }, []);

  const nextStep = useCallback(() => {
    setState((prevState) => ({ ...prevState, step: prevState.step + 1 }));
  }, []);

  const goToStep = useCallback((step: number) => {
    setState((prevState) => ({ ...prevState, step }));
  }, []);

  const resetQuiz = useCallback(() => {
    setState(defaultState);
  }, []);

  const value = { ...state, setAnswer, nextStep, goToStep, resetQuiz };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
