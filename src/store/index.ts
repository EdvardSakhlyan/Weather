import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store