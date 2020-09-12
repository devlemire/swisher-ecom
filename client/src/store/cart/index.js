import { handleActions, createAction } from "redux-actions";
import axios from "axios";

const defaultState = {
  initialized: false,
  cart: {},
  reRenderCarId: undefined,
};

const storePrefix = "cart/";
const SET_INITIALIZED = createAction(`${storePrefix}SET_INITIALIZED`);
const SET_CART = createAction(`${storePrefix}SET_CART`);
const SET_RE_RENDER_CAR_ID = createAction(`${storePrefix}SET_RE_RENDER_CAR_ID`);

export default handleActions(
  {
    [SET_INITIALIZED]: (state, { payload }) => ({
      ...state,
      initialized: payload,
    }),
    [SET_CART]: (state, { payload }) => ({
      ...state,
      cart: payload,
    }),
    [SET_RE_RENDER_CAR_ID]: (state, { payload }) => ({
      ...state,
      reRenderCarId: payload,
    }),
  },
  defaultState
);

export const initializeCart = () => async (dispatch, getState) => {
  try {
    const { cart } = getState();

    if (!cart.initialized) {
      const { data } = await axios.get("/api/v1/cart");
      dispatch(SET_CART(data));
      dispatch(SET_INITIALIZED(true));
    }
  } catch (err) {
    console.error("initializeCart failed in store/cart:", err);
  }
};

export const addToCart = (carObj) => async (dispatch, getState) => {
  try {
    const { data: cart } = await axios.post(`/api/v1/cart/add/${carObj.carId}`);

    dispatch(SET_CART(cart));
    dispatch(SET_RE_RENDER_CAR_ID(carObj.carId));
  } catch (err) {
    console.error("addToCart in store/cart failed:", err);
  }
};

export const updateQuantityOfCartItem = (carObj, newQuantity) => async (
  dispatch,
  getState
) => {
  try {
    const { data: cart } = await axios.put(
      `/api/v1/cart/update/quantity/${carObj.carId}`,
      {
        quantity: newQuantity,
      }
    );

    dispatch(SET_CART(cart));
  } catch (err) {
    console.error(
      "updatedQuantityOfCartItem failed in store/cart failed:",
      err
    );
  }
};

export const removeFromCart = (carObj) => async (dispatch, getState) => {
  try {
    const { data: cart } = await axios.delete(
      `/api/v1/cart/remove/${carObj.carId}`
    );

    dispatch(SET_CART(cart));
    dispatch(SET_RE_RENDER_CAR_ID(carObj.carId));
  } catch (err) {
    console.error("removeFromCart failed in store/cart failed:", err);
  }
};

export const checkout = () => async (dispatch, getState) => {
  try {
    const { data: cart } = await axios.post(`/api/v1/cart/checkout`);
    dispatch(SET_CART(cart));
  } catch (err) {
    console.error("checkout failed in store/cart failed:", err);
  }
};
