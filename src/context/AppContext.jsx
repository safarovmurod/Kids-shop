import { createContext, useEffect, useReducer } from "react";

// Context state-и умумиро ба Header, корзина, избранное ва аккаунт мерасонад.
export const AppContext = createContext();

// Аз localStorage корзина ва избранное-и пешинаро мехонем, то баъди F5 барқарор шаванд.
const savedCart = localStorage.getItem("cart");
const savedFavorites = localStorage.getItem("favorites");

// User ва token танҳо дар state ҳастанд; ҳоло баъди F5 login аз нав лозим мешавад.
const initialState = {
  user: null,
  token: "",
  guestProfile: { fullName: "", tel: "", email: "", address: "", avatar: null },
  cart: savedCart ? JSON.parse(savedCart) : [],
  favorites: savedFavorites ? JSON.parse(savedFavorites) : [],
  // Маҳсулоти нест кардашуда, то ки корбар "Отменить" карда тавонад
  deleted: [],
  // Маҳсулоте, ки дар Dialog нишон дода мешавад (агар null бошад, Dialog пӯшида аст)
  dialogItem: null,
  dialogAnchor: null,
};

// dispatch action мефиристад; reducer аз рӯйи type нусхаи нави state-ро бармегардонад.
function reducer(state, action) {
  switch (action.type) {
    // Маълумоти меҳмонро танҳо дар state нигоҳ медорад; ба API намефиристад.
    case "saveGuestProfile":
      return { ...state, guestProfile: action.payload };

    // Profile ва token-и аз API омадаро нигоҳ медорад; update-и profile token-и пешинаро нигоҳ медорад.
    case "login":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token || state.token,
      };

    // User ва token-ро аз state тоза мекунад, вале корзина ва избранное мемонанд.
    case "logout":
      return {
        ...state,
        user: null,
        token: "",
      };

    // Вақти пахши «В корзину»: агар product аллакай бошад count зиёд мешавад, набошад product-и нав илова мешавад.
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
          // anchorEl худи тугмаи пахшшуда аст: popup ҷойи худро аз он мегирад.
          dialogAnchor: action.anchorEl,
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...item, count: 1 }],
        dialogItem: item,
        dialogAnchor: action.anchorEl,
      };
    }

    // Тугмаи плюс count-и маҳсулоти интихобшударо якто зиёд мекунад.
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

    // Тугмаи минус count-ро кам мекунад, вале аз 1 поён намебарад.
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

    // Маҳсулотро аз корзина мебарорад ва барои «Отменить» ба deleted мегузорад.
    case "remove": {
      const item = state.cart.find((el) => el.id === action.payload);

      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload),
        deleted: item ? [...state.deleted, item] : state.deleted,
      };
    }

    // «Отменить» маҳсулотро аз deleted боз ба корзина бармегардонад.
    case "restore":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        deleted: state.deleted.filter((el) => el.id !== action.payload.id),
      };

    // Хабарчаи маҳсулоти удалшударо мепӯшонад; маҳсулотро барқарор намекунад.
    case "hideDeleted":
      return {
        ...state,
        deleted: state.deleted.filter((el) => el.id !== action.payload),
      };

    // Баъди payment-и demo корзина ва рӯйхати deleted-ро холӣ мекунад.
    case "clear":
      return {
        ...state,
        cart: [],
        deleted: [],
      };

    // Пахши дил toggle аст: агар дар избранное бошад удал мекунад, набошад илова мекунад.
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

    // Маҳсулот ва тугмаи пахшшударо нигоҳ медорад, то popup назди ҳамон тугма кушода шавад.
    case "openDialog":
      return {
        ...state,
        dialogItem: action.payload,
        dialogAnchor: action.anchorEl,
      };

    // Маълумоти popup-ро null мекунад ва CartDialog пӯшида мешавад.
    case "closeDialog":
      return {
        ...state,
        dialogItem: null,
        dialogAnchor: null,
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  // state маълумот аст; dispatch командаҳои add, remove, favorite ва дигарҳоро ба reducer медиҳад.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Корзина ва избранное пас аз F5 намепаранд
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    // Ҳар тағйири избранное дар браузер сабт мешавад.
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  // AuthModal ва RegisterPage баъди ҷавоби муваффақи API ҳамин function-ро даъват мекунанд.
  function login(user, token) {
    dispatch({ type: "login", payload: { user, token } });
  }

  // Session-и frontend-ро мебандад ва user-и кӯҳнаи localStorage-ро низ тоза мекунад.
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
