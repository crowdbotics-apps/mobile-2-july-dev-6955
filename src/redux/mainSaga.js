import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
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
EmailAuth7555Saga,
CalendarView7554Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}