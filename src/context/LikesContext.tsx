import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type LikesContextType = {
  likes: number;
  addLike: () => void;
};

const LikesContext = createContext<LikesContextType | undefined>(undefined);

type LikesProviderProps = {
  children: ReactNode;
};

export function LikesProvider({ children }: LikesProviderProps) {
  const [likes, setLikes] = useState(0);

  const addLike = () => {
    setLikes((currentLikes) => currentLikes + 1);
  };

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);

  if (context === undefined) {
    throw new Error("useLikes must be used inside LikesProvider");
  }

  return context;
}