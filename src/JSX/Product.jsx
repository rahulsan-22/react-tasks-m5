const Product = () => {
  let product = {
    name: "Parle-G",
    price: 5,
    availability: true
  }
  return (
    <>
      <h1>Product Name : {product.name}</h1>
      <h1>Product Price : ₹{product.price}</h1>
      <h1>Availability : {product.availability ? " InStock 😁" : "Out of Stock 🥺"}</h1>
    </>
  )
}

export default Product