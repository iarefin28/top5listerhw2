import React from "react";
import ItemCard from "./ItemCard";

export default class Workspace extends React.Component {
    render() {
        const {currentList, renameItemCallback} = this.props;
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div className="top5-item">
                        <ItemCard
                            currentList = {this.props.currentList}
                            item_number = {0}
                            renameItemCallback = {renameItemCallback}
                        />
                    </div>
                    <div className="top5-item">
                        <ItemCard
                            currentList = {this.props.currentList}
                            item_number = {1}
                            renameItemCallback = {renameItemCallback}
                        />
                    </div>
                    <div className="top5-item">
                        <ItemCard
                            currentList = {this.props.currentList}
                            item_number = {2}
                            renameItemCallback = {renameItemCallback}
                        />
                    </div> 
                    <div className="top5-item">
                        <ItemCard
                            currentList = {this.props.currentList}
                            item_number = {3}
                            renameItemCallback = {renameItemCallback}
                        />
                    </div> 
                    <div className="top5-item">
                        <ItemCard
                            currentList = {this.props.currentList}
                            item_number = {4}
                            renameItemCallback = {renameItemCallback}
                        />
                    </div>  
                </div>
            </div>
        )
    }
}