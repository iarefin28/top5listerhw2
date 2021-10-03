import React from "react";

export default class ItemCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            //text: this.props.currentList.items[item_number],
            editActive: false,
        }
    }
    handleClick = (event) => {
        if(event.detail === 2){
            console.log("Double clicked on item");
            this.handleToggleEdit(event);
        }
    }

    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }

    handleUpdate = (event) => {
        this.setState({text: event.target.value});
    }

    handleKeyPress = (event) => {
        if(event.code === "Enter"){
            this.handleBlur();
        }
    }

   // handleBlur = () => {

    //}

    render(){
        const{currentList, item_number} = this.props;
        if(this.state.editActive){
            return(
                <input
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={this.props.currentList.items[0]}
                />
            )
        }
        else if(currentList !== null){
            return(
                <div className = "top5-item-text" onClick={this.handleClick}>
                    <div>{this.props.currentList.items[this.props.item_number]}</div>
                    
                </div>
            )
        }
        else{
            return null;
        }
    }

}