import React from "react";

class UsersData extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({value: ''});
        this.changeValue = this.changeValue.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    sendData (e) {
        e.preventDefault();
        console.log(this.state);
    }

    changeValue (e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div style={{marginBottom: "00px"}}>

                <form>
                    <input type="text" value={this.state.value} onChange={this.changeValue}/>
                    <button type="submit" style={{background: "lightblue"}} onClick={this.sendData}>SEND</button>
                </form>

                {
                    <div style={{width: "150px", height: "40px", border: "1px solid black"}}>{this.state.value}</div>
                }

            </div>
        )
    }
}


export default UsersData;