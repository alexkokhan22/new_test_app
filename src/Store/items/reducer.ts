//types
import { IAction, IItemsList } from './models';

//actions
import { GET_ITEMS } from './actions';

export const initialState: IItemsList = {
  itemsList: [],
};

export const itemsList = (state = initialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ITEMS: {
      return {
        ...state,
        itemsList: payload,
      };
    }
    default: {
      return state;
    }
  }
};
