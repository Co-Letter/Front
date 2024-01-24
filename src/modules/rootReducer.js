import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from './user'
import store from './store'

const reducer = combineReducers({user, store});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'store']
}
const rootReducer = persistReducer(persistConfig, reducer)

export default rootReducer;