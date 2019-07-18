import React, {Component} from 'react';

class CardColor extends Component{
    constructor(props) {
        super(props);
        this.state={
            color: this.props.color
        }
    }

    render() {
        return(
            <div className="card-color">
                <div className={"card-color-r"} style={{backgroundColor:this.state.color}} />
            </div>
        )
    }
}

export default CardColor
