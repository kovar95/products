import { useState, createContext, useContext, useMemo, ReactNode } from "react";

type SessionContextType = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
};

export const SessionContext = createContext<SessionContextType>(
  {} as SessionContextType
);

type Props = {
  children: ReactNode;
};

// This provider will imitate session provider

export default function SessionContextProvider({
  children,
}: Props): React.ReactElement {
  const [isAuth, setIsAuth] = useState(false);

  const contextValues = useMemo(() => ({ isAuth, setIsAuth }), [isAuth]);

  return (
    <SessionContext.Provider value={contextValues}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
