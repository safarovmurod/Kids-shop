import { createContext, useEffect, useReducer } from "react";

export const AppContext = createContext();

const savedUser = localStorage.getItem("user");
const savedCart = localStorage.getItem("cart");
const savedFavorites = localStorage.getItem("favorites");

const initialState = {
  user: savedUser ? JSON.parse(savedUser) : null,
  cart: savedCart ? JSON.parse(savedCart) : [],
  favorites: savedFavorites ? JSON.parse(savedFavorites) : [],
  // Маҳсулоте, ки дар Dialog нишон дода мешавад (агар null бошад, Dialog пӯшида аст)
  dialogItem: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
      };

    case "logout":
      return {
        ...state,
        user: null,
      };

    case "add": {
      const item = action.payload;
      const old = state.cart.find((el) => el.id === item.id);

      if (old) {
        return {
          ...state,
          cart: state.cart.map((el) => {
            if (el.id === item.id) {
              return { ...el, count: el.count + 1 };
            }

            return el;
          }),
          dialogItem: item,
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...item, count: 1 }],
        dialogItem: item,
      };
    }

    case "increment":
      return {
        ...state,
        cart: state.cart.map((el) => {
          if (el.id === action.payload) {
            return { ...el, count: el.count + 1 };
          }

          return el;
        }),
      };

    case "decrement":
      return {
        ...state,
        cart: state.cart.map((el) => {
          if (el.id === action.payload && el.count > 1) {
            return { ...el, count: el.count - 1 };
          }

          return el;
        }),
      };

    case "remove":
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload),
      };

    case "clear":
      return {
        ...state,
        cart: [],
      };

    case "favorite": {
      const item = action.payload;
      const old = state.favorites.find((el) => el.id === item.id);

      if (old) {
        return {
          ...state,
          favorites: state.favorites.filter((el) => el.id !== item.id),
        };
      }

      return {
        ...state,
        favorites: [...state.favorites, item],
      };
    }

    case "openDialog":
      return {
        ...state,
        dialogItem: action.payload,
      };

    case "closeDialog":
      return {
        ...state,
        dialogItem: null,
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Корзина ва избранное пас аз F5 намепаранд
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  function login(userData) {
    dispatch({ type: "login", payload: userData });
    localStorage.setItem("user", JSON.stringify(userData));
  }

  function logout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("user");
  }

  return (
    <AppContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </AppContext.Provider>
  );
}
