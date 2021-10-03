import React from "react";

export default class ItemCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            textContent: "",
            editActive: false,
        }
    }
    handleClick = (event) => {
        if(event.detail === 2){
            //event.target.textContent is the name of the item that was selected.
            this.handleToggleEdit(event);
            this.setState({textContent: event.target.textContent})
        }
    }

    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive,
        });
    }

    handleUpdate = (event) => {
        this.setState({textContent: event.target.value});
    }

    handleKeyPress = (event) => {
        if(event.code === "Enter"){
            this.handleBlur();
        }
    }

    handleBlur = () => {
        let renameItemText = this.state.textContent
        console.log("ItemCard handleBlur: " + renameItemText);
        this.props.renameItemCallback(this.props.item_number, renameItemText);
        this.handleToggleEdit();
    }



    render(){
        const{currentList, item_number} = this.props;

        if(this.state.editActive){
            return(
                <input
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={this.props.currentList.items[this.props.item_number]}
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