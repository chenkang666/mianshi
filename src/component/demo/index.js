import React, {Component} from 'react'
import './index.css'
import List from '../list'
import Title from '../title'

class Demo extends Component{
    constructor(props) {
        super(props);
        this.state={
            list: [
                {
                    color: "#81D395",
                    title: "墨刀工作室",
                    sock: false,
                    lone: false,
                    num: 3
                },
                {
                    color: "#F8C374",
                    title: "墨刀魔法棒团队",
                    sock: false,
                    lone: false,
                    num: 0
                },
                {
                    color: "#F2908D",
                    title: "超级工作组",
                    sock: false,
                    lone: true,
                    num: 4
                },
                {
                    color: "#E38073",
                    title: "冷笑客服组",
                    sock: false,
                    lone: false,
                    num: 4
                },
                {
                    color: "#F8C767",
                    title: "设计部门",
                    sock: false,
                    lone: false,
                    num: 4
                },
                {
                    color: "#8DCAEB",
                    title: "Third Reactor",
                    sock: true,
                    lone: true,
                    num: 1
                }
            ],
            show: "all"
        }
    }

    handleChangeData(data,idx){
        const chooseDiv = document.querySelectorAll(".title-choose-list > div");
        chooseDiv.forEach((item, index) => {
            chooseDiv[index].className = ""
        })
        chooseDiv[idx].className = "on"

        const titleName = document.querySelector(".title-name > span");

        switch (data) {
            case "all":
                this.setState({
                    show: "all"
                });
                titleName.innerHTML = "所有项目组";
                break;
            case "sock":
                this.setState({
                    show: "sock"
                });
                titleName.innerHTML = "锁定";
                break;
            case "lone":
                this.setState({
                    show: "lone"
                });
                titleName.innerHTML = "私密";
                break;
            default:
                break
        }
    }
    render() {
        return(
            <div id={"demo"}>
                <Title
                    changeData={this.handleChangeData.bind(this)}
                />
                <List
                    data={this.state.list}
                    show={this.state.show}
                />
            </div>
        )
    }
}

export default Demo
