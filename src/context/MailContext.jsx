import { createContext, useContext, useReducer } from "react";
import { mails } from "../data/fakeFetch";
import PropTypes from "prop-types";

export const MailContext = createContext();

const initialState = {
  allData: [],
  allDeleteMail: [],
  allSpamMail: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "TRASH": {
      const result = state.allData.filter((data) => data.mId === action.id);
      // state.allDeleteMail = [...state.allDeleteMail, result];
      console.log(state.allDeleteMail);

      const newState = {
        ...state,
        allDeleteMail: [...state.allDeleteMail, ...result],
      };
      return newState;
    }
    case "ADD_MAIL": {
      state.allData = action.payload;
      const newState = {
        ...state,
        allData: action.payload,
      };
      return newState;
    }
    case "ADD_READ": {
      const result = state.allData.map((data) =>
        data.mId === action.id ? { ...data, unread: false } : { ...data }
      );
      const newState = { ...state, allData: [...state.allData, ...result] };
      return newState;
    }
    case "ADD_SPAM": {
      const result = state.allData.filter((data) => data.mId === action.id);

      const newState = {
        ...state,
        allSpamMail: [...state.allSpamMail, ...result],
      };

      return newState;
    }
    case "ADD_STAR": {
      const result = state.allData.map((data) =>
        data.mId === action.id ? { ...data, isStarred: true } : { ...data }
      );
      const newState = { ...state, allData: [...state.allData, ...result] };
      return newState;
    }

    case "SHOW_READ": {
      const result = state.allData.filter((data) => data.unread);
      const newState = {
        ...state,
        allData: [...result],
      };
      return newState;
    }
    case "SHOW_STAR": {
      const result = state.allData.filter((data) => data.isStarred);
      const newState = {
        ...state,
        allData: [...result],
      };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export const MailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToTrash = (mId) => {
    dispatch({ type: "TRASH", id: mId });
  };

  const addAllMail = (mails) => {
    dispatch({ type: "ADD_MAIL", payload: mails });
  };

  const addAsRead = (mId) => {
    dispatch({ type: "ADD_READ", id: mId });
  };

  const addToSpam = (mId) => {
    dispatch({ type: "ADD_SPAM", id: mId });
  };

  const addStar = (mId) => {
    dispatch({ type: "ADD_STAR", id: mId });
  };

  const showUnread = (checked) => {
    if (checked) {
      dispatch({ type: "SHOW_READ" });
    } else {
      addAllMail(mails);
    }
  };

  const showStared = (checked) => {
    if (checked) {
      dispatch({ type: "SHOW_STAR" });
    } else {
      addAllMail(mails);
    }
  };

  return (
    <MailContext.Provider
      value={{
        state,
        addToTrash,
        addAllMail,
        dispatch,
        addAsRead,
        addToSpam,
        addStar,
        showUnread,
        showStared,
      }}
    >
      {children}
    </MailContext.Provider>
  );
};

MailProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMail = () => useContext(MailContext);
