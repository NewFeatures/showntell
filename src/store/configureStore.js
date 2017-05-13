import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
} 