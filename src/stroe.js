import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware,combineReducers} from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import globalReducer from './reducers/reducer';

const rootReducer = combineReducers({
  contacts: globalReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

};
const persistedReducer = persistReducer(persistConfig,rootReducer,);
// Redux: Store
const store = createStore( persistedReducer,applyMiddleware(thunk, createLogger()));
let persistor = persistStore(store);
export {
  store,
  persistor,
};


