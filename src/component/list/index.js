import React, {Component} from 'react';
import './index.css'
import Card from '../card'
import CardCreate from '../cardcreate'

class List extends Component{
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.data,
            show: this.props.show
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.state.show === nextProps.show)  return;
        this.setState({
            show: nextProps.show
        })
    }

    render() {
        return(
            <div className={"list"}>
                {
                    this.state.list.map((item, index) => {
                        switch (this.state.show) {
                            case "all":
                                return (
                                    <Card
                                        data={item}
                                        key={index}
                                    />
                                );
                            case "sock":
                                if (item.sock){
                                    return(
                                        <Card
                                            data={item}
                                            key={index}
                                        />
                                    )
                                }else{
                                    break;
                                }
                            case "lone":
                                if (item.lone){
                                    return(
                                        <Card
                                            data={item}
                                            key={index}
                                        />
                                    )
                                }else{
                                    break;
                                }
                            default: break
                        }
                        return(<div key={index} />);
                    })
                }
                <CardCreate />
            </div>
        )
    }
}

export default List
