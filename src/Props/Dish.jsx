const Dish = ({name,price}) => {
  return (
    <div>
      <h1>Dish Name : {name}</h1>
      <h1>Dish Price : ₹{price}</h1>
      <hr />
    </div>
  )
}

export default Dish