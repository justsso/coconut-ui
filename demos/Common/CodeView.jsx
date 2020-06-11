import React from 'react';
import "./CodeView.less";

class CodeView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let children = this.props.children
        return <div className="code-view-wrapper">
            {children}
        </div>
    }
}
export default CodeView;