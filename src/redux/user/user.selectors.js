import { createSelector }from "reselect"

const selectUser = state => state.user 

const selectCart = state => state.cart

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)