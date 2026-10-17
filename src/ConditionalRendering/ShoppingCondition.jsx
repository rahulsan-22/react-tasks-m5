const ShoppingCondition = () => {
  let isLoggedIn = true;
  let cartCount = 0;
  let result;
  if (cartCount > 5) {
    result = <h1>Bulk Shopping</h1>
  } else if (cartCount >= 1 && cartCount <= 5) {
    result = <h1>Regular Shopping</h1>
  } else {
    result = <h1>Your Cart is Empty!</h1>
  }
  return (
    <>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}
      {result}
      {cartCount>0 && `You have ${cartCount} items in your cart`}
    </>
  )

}

export default ShoppingCondition