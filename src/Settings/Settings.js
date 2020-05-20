import React from "react";

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="Settings" className="hidden">
                <div id="Container">
                    <div id="SideBar"></div>
                    <div id="Content"></div>
                    <button onClick={this.props.toggleSettings} id="CloseButt">
                        X
                    </button>
                </div>
            </div>
        );
    }
}
