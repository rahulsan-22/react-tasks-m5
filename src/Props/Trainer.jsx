const Trainer = ({img,name,age,designation}) => {
  return (
    <>
      <img src={img} alt={name} />
      <h1>Trainer Name: {name}</h1>
      <h1>Trainer Age: {age}</h1>
      <h1>Trainer Designation: {designation}</h1>
      <hr />
    </>
  )
}

export default Trainer