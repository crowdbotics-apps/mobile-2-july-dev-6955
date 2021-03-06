import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView7787Saga from '../features/CalendarView7787/redux/sagas';
import EmailAuth7783Saga from '../features/EmailAuth7783/redux/sagas';
import CalendarView7782Saga from '../features/CalendarView7782/redux/sagas';
import EmailAuth17570Saga from '../features/EmailAuth17570/redux/sagas';
import EmailAuth27569Saga from '../features/EmailAuth27569/redux/sagas';
import EmailAuth27566Saga from '../features/EmailAuth27566/redux/sagas';
import EmailAuth37565Saga from '../features/EmailAuth37565/redux/sagas';
import EmailAuth17560Saga from '../features/EmailAuth17560/redux/sagas';
import EmailAuth37557Saga from '../features/EmailAuth37557/redux/sagas';
import EmailAuth7555Saga from '../features/EmailAuth7555/redux/sagas';
import CalendarView7554Saga from '../features/CalendarView7554/redux/sagas';
import CalendarView47549Saga from '../features/CalendarView47549/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth7783Saga,
CalendarView7782Saga,
EmailAuth17570Saga,
EmailAuth27569Saga,
EmailAuth27566Saga,
EmailAuth37565Saga,
EmailAuth17560Saga,
EmailAuth37557Saga,
EmailAuth7555Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}