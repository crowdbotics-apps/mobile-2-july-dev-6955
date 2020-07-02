import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth7555Reducer from '../features/EmailAuth7555/redux/reducers';
import CalendarView7554Reducer from '../features/CalendarView7554/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth7555: EmailAuth7555Reducer,
CalendarView7554: CalendarView7554Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});