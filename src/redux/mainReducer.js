import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth37557Reducer from '../features/EmailAuth37557/redux/reducers';
import EmailAuth7555Reducer from '../features/EmailAuth7555/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth37557: EmailAuth37557Reducer,
EmailAuth7555: EmailAuth7555Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});