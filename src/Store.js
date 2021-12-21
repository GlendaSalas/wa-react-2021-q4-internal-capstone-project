import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import cartReducer from './pages/Cart/Slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const useAppDispatch = () => useDispatch();
const useAppSelector = useSelector;

export { useAppDispatch, useAppSelector, store };
