import React from "react";

class CollapseItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {title, children} = this.props;
        return (
            <div>
                <div className="collapse__item">
                    <div className="collapse-item__title">
                        {title}
                    </div>
                    <div className="collapse-item__body">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}


export default CollapseItem
