import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {




  generateSushi = () => {
    return this.props.sushis.map( sushi => 
      <Sushi 
        id={sushi.id}
        name={sushi.name}
        img={sushi.img_url}
        price={sushi.price}
        eatSushi={this.props.eatSushi}
        money={this.props.money}
        eaten={this.props.eaten.find(eaten => eaten.id === sushi.id) ? true : false}
      />
      )
  }

  

  render(){
    return (
        <div className="belt">
          {this.generateSushi()}
          <MoreButton moreSushi={this.props.moreSushi}/>
        </div>
    )
  }
}

export default SushiContainer