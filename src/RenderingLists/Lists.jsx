const Lists = () => {
  const products = [
  { id: 101, name: "T-Shirt", price: 499 },
  { id: 102, name: "Shoes", price: 1499 },
  { id: 103, name: "Watch", price: 999 }
];
  return (
    <div>
      <h1>Our Products</h1>
      {
        products.map((item) => {
          return <p>{item.name} - ₹{item.price}</p>
        })
      }
    </div>
  )
}

export default Lists