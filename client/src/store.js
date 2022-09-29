import { combineReducers, applyMiddleware} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { guardLoginReducer, guardRegisterReducer } from './reducers/guardReducer';

const reducer = combineReducers({
  //this will contain our reducers
  guardLogin: guardLoginReducer,
  guardRegister: guardRegisterReducer,
});

const guardInfoFromStorage = localStorage.getItem("guardInfo")
?JSON.parse(localStorage.getItem("guardInfo"))
:null;

const initialState = {
  guardLogin: { guardInfo: guardInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

