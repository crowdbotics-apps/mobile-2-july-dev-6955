import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth27569Reducer from '../features/EmailAuth27569/redux/reducers';
import EmailAuth37568Reducer from '../features/EmailAuth37568/redux/reducers';
import EmailAuth27566Reducer from '../features/EmailAuth27566/redux/reducers';
import EmailAuth37565Reducer from '../features/EmailAuth37565/redux/reducers';
import EmailAuth17560Reducer from '../features/EmailAuth17560/redux/reducers';
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
EmailAuth27569: EmailAuth27569Reducer,
EmailAuth37568: EmailAuth37568Reducer,
EmailAuth27566: EmailAuth27566Reducer,
EmailAuth37565: EmailAuth37565Reducer,
EmailAuth17560: EmailAuth17560Reducer,
EmailAuth37557: EmailAuth37557Reducer,
EmailAuth7555: EmailAuth7555Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});