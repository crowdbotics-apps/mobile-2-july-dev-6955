import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
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
EmailAuth17560Saga,
EmailAuth37557Saga,
EmailAuth7555Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}