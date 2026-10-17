import { Fragment } from "react"

const Rules = () => {
  return (
    <>
      <h1>Rules of JSX</h1>
      <ol>
        <li>Multiple JSX Elements must be wrapped in a single parent</li>
        <li>Unpaired Tags must be closed properly</li>
        <li>Attributes should be written in camelCase and the attributes like for and class should be replaced with htmlFor and className</li>
        <li>JSX Elements must always be written in lowercase</li>
      </ol>
      <h1>Fragments: are those which render multiple jsx elements without creating a extra node</h1>
      <p>Syntax: &lt;Fragment&gt;&lt;/Fragment&gt; or &lt;&gt;&lt;/&gt;</p>
    </>
  )
}

export default Rules