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

    onDragStart = (event) => {
        //console.log(event.target)
    }

    dragOver = (event) => {
        event.stopPropagation();
    }

    dragEnter = (event) => {
        event.stopPropagation();
        //console.log(event.target) //this is the item that we need to replace it with
        //so we must call a function that changes all the items in the list
        event.target.style.backgroundColor = "#669966";

    }

    dragLeave = (event) => {
        //console.log(event.target)
        event.target.style.backgroundColor = "#e1e4cb";
    }

    render(){
        const{currentList, item_number} = this.props;

        if(this.state.editActive){
            return(
                <input
                    type='text'
                    className = "top5-item-text"
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={this.props.currentList.items[this.props.item_number]}
                />
            )
        }
        else if(currentList !== null){
            return(
                    <div
                        className = "top5-item" 
                        onClick={this.handleClick}
                        draggable="true"
                        onDragStart={this.onDragStart}
                        onDragOver={this.dragOver}
                        onDragEnter={this.dragEnter}
                        onDragLeave={this.dragLeave}
                    >{this.props.currentList.items[this.props.item_number]}</div>
            )
        }
        else{
            return null;
        }
    }

}