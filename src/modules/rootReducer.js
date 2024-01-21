import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from './user'

const reducer = combineReducers({user});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}
const rootReducer = persistReducer(persistConfig, reducer)

export default rootReducer;