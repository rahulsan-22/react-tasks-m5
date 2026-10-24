const StudentLogin = () => {
  let handleFocus = (e) => {
    e.target.style.background="lightblue"
  }
  let handleBlur = (e) => {
    e.target.style.background = "white"
  }
  let handleChange = (e) => {
    console.log(e.target.value)
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login form submitted successfully!")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange}/>
      <br /><br />
      <input type="password" placeholder="Enter your password" onFocus={handleFocus} onBlur={handleBlur}/>
      <br /><br />
      <input type="submit" value="Login"/>
    </form>
  )
}

export default StudentLogin