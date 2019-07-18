import React, {Component} from 'react';
import './index.css'
import TitleChoose from '../titlechoose'

class Title extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fn: this.props.changeData
        }
    }

    render() {
        return(
            <div className={"title"}>
                <div className={"title-name"}>
                    <span>所有项目组</span>
                </div>

                <TitleChoose
                    changeData={this.state.fn}
                />
            </div>
        )
    }
}

export default Title
