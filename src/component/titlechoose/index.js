import React, {Component} from 'react'
import './index.css'

class TitleChoose extends Component{
    constructor(props) {
        super(props);
        this.state={
            fn: this.props.changeData
        }
    }

    render() {
        return(
            <div className={"title-choose-list"}>
                <div className={"on"} onClick={this.state.fn.bind(this,"all", 0)}>
                    <span>所有项目组</span>
                </div>
                <div onClick={this.state.fn.bind(this,"sock", 1)}>
                    <span>锁定</span>
                </div>
                <div onClick={this.state.fn.bind(this,"lone", 2)}>
                    <span>私密</span>
                </div>
            </div>
        )
    }
}

export default TitleChoose
