const Student = ({coursename,price,yop,children}) => {
  return (
    <div>
      <h1>Course: {coursename}</h1>
      <h1>Price: ₹{price}</h1>
      <h1>Yop: {yop}</h1>
      {children}
    </div>
  )
}

export default Student