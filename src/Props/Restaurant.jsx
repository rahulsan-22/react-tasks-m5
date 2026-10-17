const Restaurant = ({name,loc,pin}) => {
  return (
    <>
      <h1>Restaurant Name: {name}</h1>
      <h1>Restaurant Location: {loc}</h1>
      <h1>Restaurant Pincode: {pin}</h1>
      <hr />
    </>
  )
}

export default Restaurant