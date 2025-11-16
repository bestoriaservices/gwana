import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemePreset = 'default' | 'high-contrast' | 'minimal';
type AccentColor = 'cyan' | 'magenta' | 'green' | 'amber';

interface ThemeContextType {
  preset: ThemePreset;
  setPreset: (preset: ThemePreset) => void;
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [preset, setPreset] = useState<ThemePreset>('default');
  const [accentColor, setAccentColor] = useState<AccentColor>('cyan');
  const [reducedMotion, setReducedMotion] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        preset,
        setPreset,
        accentColor,
        setAccentColor,
        reducedMotion,
        setReducedMotion
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
