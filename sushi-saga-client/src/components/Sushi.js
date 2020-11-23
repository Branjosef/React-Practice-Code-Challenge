import React from 'react'

class Sushi extends React.Component{


  purchase() {
    if (this.props.money >= this.props.price){
        this.props.eatSushi(this.props)
    }
  }

  render(){
  return (
    <div className="sushi">
      <div className="plate" onClick={null}>
      <img src={this.props.eaten === true ? null : this.props.img}
         width="100%" onClick={this.props.eaten === true ? null : event => this.purchase()}/>
      </div>
      <h4 className="sushi-details">
        {this.props.name} - {this.props.price}
      </h4>
    </div>
  )
      }
}

export default Sushi