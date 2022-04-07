import { createContext, ReactNode, useCallback, useState } from 'react';

export type SideBarContextType = {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
};

export const SideBarContext = createContext<
  SideBarContextType | undefined
>(undefined);

export default function SideBarContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(true);

  const toggleSideBar = useCallback(() => {
    setIsSideBarOpen((prev) => !prev);
  }, []);

  return (
    <SideBarContext.Provider
      value={{
        isSideBarOpen,
        toggleSideBar,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}
