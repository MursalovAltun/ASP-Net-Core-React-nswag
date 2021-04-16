import { Action, configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todo/todoSlice';
import snackbarReducer from "../components/snackbarSlice";

const middleware = [...getDefaultMiddleware()]

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => '#139BFE',
      prevState: () => '#1C5FAF',
      action: () => '#149945',
      nextState: () => '#A47104',
      error: () => '#ff0005',
    },
  });

  middleware.push(logger);
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    snackbar: snackbarReducer,
  },
  middleware
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
