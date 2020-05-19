import React from "react";

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="Settings" className="hidden">
                <div className="container">
                    <button onClick={this.props.toggleSettings} className="closeButt">
                        X
                    </button>
                    <span>Test 1 2 3</span>
                </div>
            </div>
        );
    }
}
