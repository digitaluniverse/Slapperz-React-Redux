import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { productListReducer, productDetailsReducer } from './reducers/productReducers'

import {
    userReducers,
    orderReducers,
    productReducers,
    cartReducers,
} from 'reducers'

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
const shippingAddressFromStorage = localStorage.getItem("shippingAddress") ? JSON.parse(localStorage.getItem("shippingAddress")) : {};
// const paymentMethodFromStorage = localStorage.getItem("paymentMethod") ? JSON.parse(localStorage.getItem("paymentMethod")) : {};


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        // paymentMethod: paymentMethodFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage }
}
const middleware = [thunk]

const reducer = combineReducers({
    //Product Reducers
    productList: productReducers.productListReducer,
    productDetails: productReducers.productDetailsReducer,
    cart: cartReducers.cartReducer,

    //User Reducers
    userLogin: userReducers.userLoginReducer,
    userRegister: userReducers.userRegisterReducer,
    userDetails: userReducers.userDetailsReducer,
    userUpdateProfile: userReducers.userUpdateProfileReducer,
    userVerifyPhone: userReducers.userVerifyPhoneReducer,
    userRegisterPhone: userReducers.userRegisterPhoneReducer,
    userVerifyEmail: userReducers.userVerifyEmailReducer,
    userEmailConfirm: userReducers.userEmailConfirmReducer,
    userPasswordResetEmail: userReducers.userPasswordResetEmailReducer,
    userPasswordResetAuth: userReducers.userPasswordResetAuthReducer,
    userPasswordReset: userReducers.userPasswordResetReducer,

    //Order Reducers
    orderCreate: orderReducers.orderCreateReducer,
    orderDetails: orderReducers.orderDetailsReducer,


})


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;