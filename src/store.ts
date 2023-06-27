import { configureStore } from '@reduxjs/toolkit'
import todoReduser from './feature/todoList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

export const store = configureStore({
  reducer: {
    todoList: todoReduser
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch