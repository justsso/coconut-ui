import * as React from 'react';
import * as PropTypes from 'prop-types';
// import classNames from 'classnames';

export interface ColProps {
    span ?: number
}

class Col extends React.Component<ColProps>{
    static defaultProps = {
        span : 1
    };

    static propTypes = {
      span : PropTypes.number
    };
    constructor(props: any){
        super(props);
        this.state = {
            cls: 'col'
        }
    }

    componentDidMount(): void {
    }



    render(){
        return (
            <div className={'col'}></div>
        )
    }
}

export default Col;
