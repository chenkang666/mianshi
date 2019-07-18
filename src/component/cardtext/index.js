import React, {Component} from 'react';

class CardText extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            sock: this.props.sock,
            lone: this.props.lone,
            num: this.props.num
        }
    }

    render() {
        return(
            <div className="card-text">
                <div className={"card-text-title"}>
                    <span>{this.state.title}</span>
                </div>
                <div className={"card-text-state"}>
                    <div className={this.state.sock ? "card-text-state-sock" : "none"}>
                        <span>锁定</span>
                    </div>
                    <div className={this.state.lone ? "card-text-state-lone" : "none"}>
                        <span>私密</span>
                    </div>
                </div>
                <div className={"card-text-num"}>
                    <span>{this.state.num}</span>
                    <span>项目</span>
                </div>
            </div>
        )
    }
}

export default CardText
