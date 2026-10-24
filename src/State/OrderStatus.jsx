import  { Component } from 'react'
export default class OrderStatus extends Component {
  state = {
    customerName: "Ananya",
    status: "Preparing"
  }
  changeStatus = () => {
    this.setState({status:"Ready"})
  }
  render() {
    return (
      <div>
        <h1>Café Order</h1>
        <h1>Customer: {this.state.customerName}</h1>
        <h1>Status: {this.state.status}</h1>
        <button onClick={this.changeStatus}>
          {this.state.status === "Preparing" ? "Mark as Ready" : "Order ready for collection! "}
        </button>
      </div>
    )
  }
}
