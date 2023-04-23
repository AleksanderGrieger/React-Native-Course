import { createContext, useState } from "react";

interface FavouritesContext {
  ids: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
}

export const FavouritesContext = createContext<FavouritesContext>({
  ids: [],
  addFavourite: (id: string) => {
  },
  removeFavourite: (id: string) => {
  }
});

const FavouritesContextProvider = ({ children }: { children: JSX.Element }) => {
  const [favouriteMealIds, setFavouriteMealIds] = useState<string[]>([]);

  const addFavourite = (id: string) => {
    setFavouriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavourite = (id: string) => {
    setFavouriteMealIds((currentFavIds) =>
      currentFavIds.filter((currentId) => currentId !== id)
    );
  };

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite
  };

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
};

export default FavouritesContextProvider;
