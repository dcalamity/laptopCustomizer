import React, {Component} from 'react';
import './cart.css';
import Total from './total';
import './cart.css';



const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Cart extends Component {
  
    render(){
      
      console.log(this.props.selected)

      const summary = Object.keys(this.props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = this.props.selected[feature];
  
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );
      });

      

    
    return(
      <div>
        
        <section className="main__summary">
          <h2>Your cart</h2>
          {summary}
          <Total selected={this.props.selected} />  
        </section>
      
     </div>
    )
  } 
}
export default Cart;