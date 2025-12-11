import { createContext, useContext, useState, ReactNode } from 'react';

interface DiagnosticData {
  painZone: string | null;
  age: number | null;
  weight: number | null;
  screenHours: number | null;
}

interface DiagnosticContextType {
  data: DiagnosticData;
  setData: (data: Partial<DiagnosticData>) => void;
  resetData: () => void;
}

const initialData: DiagnosticData = {
  painZone: null,
  age: null,
  weight: null,
  screenHours: null,
};

const DiagnosticContext = createContext<DiagnosticContextType | undefined>(undefined);

export function DiagnosticProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<DiagnosticData>(initialData);

  const setData = (newData: Partial<DiagnosticData>) => {
    setDataState((prev) => ({ ...prev, ...newData }));
  };

  const resetData = () => {
    setDataState(initialData);
  };

  return (
    <DiagnosticContext.Provider value={{ data, setData, resetData }}>
      {children}
    </DiagnosticContext.Provider>
  );
}

export function useDiagnostic() {
  const context = useContext(DiagnosticContext);
  if (!context) {
    throw new Error('useDiagnostic must be used within a DiagnosticProvider');
  }
  return context;
}