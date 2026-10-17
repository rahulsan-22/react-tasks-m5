import BranchHead from './BranchHead'

const Management = () => {
  let info = {
     coursename : "Java/Python Fullstack",
     price: 29950,
     yop:2026
  }
  return <BranchHead {...info}>
     Note Offer Closes Soon
  </BranchHead>
}

export default Management