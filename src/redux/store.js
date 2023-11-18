import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { quizReducer } from './quiz/quizSlice.js';
import { userReducer } from './user/userSlice.js';
import { feedbackReducer } from './feedback/feedbackSlice.js';
import { rootReducer } from './rootSlice.js';
import { modalReducer } from './Modal/modalSlice.js';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer:{
    user: persistReducer(userPersistConfig, userReducer),
    quiz: quizReducer,
    root: rootReducer,
    feedback: feedbackReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);