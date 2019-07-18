import React, {Component} from 'react';
import './index.css'
import CardColor from '../cardcolor'
import CardText from '../cardtext'


class Card extends Component{
    constructor(props) {
        super(props);
        this.state = {
            card: this.props.data
        }
    }

    render() {
        return(
            <div className={this.state.card.sock ? "sock card" : "card"}>
                <CardColor color={this.state.card.color}/>
                <CardText
                    title={this.state.card.title}
                    sock={this.state.card.sock}
                    lone={this.state.card.lone}
                    num={this.state.card.num}
                />
            </div>
        )
    }
}

export default Card
