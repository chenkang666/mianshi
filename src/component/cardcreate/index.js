import React,{Component} from 'react';
import './index.css'

class CardCreate extends Component{
    constructor(props) {
        super(props);
        this.state ={}
    }

    render() {
        return (
            <div className={"card card-create"}>
                <div className={"card-create-add"}>
                    <span>+</span>
                </div>
                <div className={"card-create-text"}>
                    <span>新建项目组</span>
                </div>
            </div>
        );
    }
}
export default CardCreate
