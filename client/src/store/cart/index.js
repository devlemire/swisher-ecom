import { handleActions, createAction } from "redux-actions";
import cloneDeep from "lodash.clonedeep";

const defaultState = {
  total: 0.0,
  inCartLookup: {},
  carsInCart: [],
  reRenderCarId: undefined,
};

const storePrefix = "cart/";
const SET_CARS_IN_CART = createAction(`${storePrefix}SET_CARS_IN_CART`);
const SET_TOTAL = createAction(`${storePrefix}SET_TOTAL`);
const SET_IN_CART_LOOKUP = createAction(`${storePrefix}SET_IN_CART_LOOKUP`);
const SET_RE_RENDER_CAR_ID = createAction(`${storePrefix}SET_RE_RENDER_CAR_ID`);

export default handleActions(
  {
    [SET_CARS_IN_CART]: (state, { payload }) => ({
      ...state,
      carsInCart: payload,
    }),
    [SET_TOTAL]: (state, { payload }) => ({
      ...state,
      total: payload,
    }),
    [SET_IN_CART_LOOKUP]: (state, { payload }) => ({
      ...state,
      inCartLookup: payload,
    }),
    [SET_RE_RENDER_CAR_ID]: (state, { payload }) => ({
      ...state,
      reRenderCarId: payload,
    }),
  },
  defaultState
);

function calculateTotal(cart) {
  return cart
    .reduce((total, next) => {
      return total + next.carPrice * next.quantity;
    }, 0)
    .toFixed(2);
}

export const addToCart = (carObj) => (dispatch, getState) => {
  try {
    const {
      cart: { inCartLookup, carsInCart },
    } = getState();

    const carObjClone = cloneDeep(carObj);
    const inCartLookupClone = cloneDeep(inCartLookup);
    const carsInCartClone = cloneDeep(carsInCart);

    if (!carObj || typeof carObj !== "object") {
      return console.error("No car was provided to add to the cart");
    }

    if (inCartLookup[carObj.carId]) {
      return console.error("The car is already in the cart");
    }

    carObjClone.quantity = 1;
    inCartLookupClone[carObjClone.carId] = true;
    carsInCartClone.push(carObjClone);

    const newTotal = calculateTotal(carsInCartClone);

    dispatch(SET_TOTAL(newTotal));
    dispatch(SET_CARS_IN_CART(carsInCartClone));
    dispatch(SET_IN_CART_LOOKUP(inCartLookupClone));
    dispatch(SET_RE_RENDER_CAR_ID(carObjClone.carId));
  } catch (err) {
    console.error("addToCart in store/cart failed:", err);
  }
};

export const updateQuantityOfCartItem = (cartIndex, newQuantity) => (
  dispatch,
  getState
) => {
  try {
    const {
      cart: { carsInCart },
    } = getState();

    const carsInCartClone = cloneDeep(carsInCart);
    const carObj = carsInCartClone[cartIndex];

    carObj.quantity = newQuantity;
    const newTotal = calculateTotal(carsInCartClone);

    dispatch(SET_TOTAL(newTotal));
    dispatch(SET_CARS_IN_CART(carsInCartClone));
  } catch (err) {
    console.error(
      "updatedQuantityOfCartItem failed in store/cart failed:",
      err
    );
  }
};

export const removeFromCart = (cartIndex) => (dispatch, getState) => {
  try {
    const {
      cart: { inCartLookup, carsInCart },
    } = getState();

    let inCartLookupClone = cloneDeep(inCartLookup);
    let carsInCartClone = cloneDeep(carsInCart);
    let carObjClone = carsInCartClone[cartIndex];

    delete inCartLookupClone[carObjClone.carId];
    carsInCartClone.splice(cartIndex, 1);

    const newTotal = calculateTotal(carsInCartClone);

    console.log("carObjClone", carObjClone);

    dispatch(SET_TOTAL(newTotal));
    dispatch(SET_CARS_IN_CART(carsInCartClone));
    dispatch(SET_IN_CART_LOOKUP(inCartLookupClone));
    dispatch(SET_RE_RENDER_CAR_ID(carObjClone.carId));
  } catch (err) {
    console.error("removeFromCart failed in store/cart failed:", err);
  }
};
