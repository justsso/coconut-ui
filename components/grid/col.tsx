import * as React from 'react';
import * as PropTypes from 'prop-types';
import RowContext from "./RowContext";
import classNames from 'classnames';
import './style/index.scss';

type ColSpanType = number | string;

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: ColSpanType,
    offset?: ColSpanType,
    prefixCls?: string
}

class Col extends React.Component<ColProps, {}> {
    static propTypes = {
        span: PropTypes.number,
        offset: PropTypes.number,
        className: PropTypes.string,
        children: PropTypes.node
    };

    constructor(props: any) {
        super(props);
        this.state = {
            cls: 'col'
        }
    }

    componentDidMount(): void {
    }


    render() {
        const {children, className, span, offset, ...others} = this.props;
        const prefixCls = 'coconut-col';
        //分析classes
        const classes = classNames(
            prefixCls,
            {
                [`${prefixCls}-span-${span}`]: span !== undefined,
                [`${prefixCls}-offset-${offset}`]: offset
            },
            className
        );

        return (
            <RowContext.Consumer>
                {
                    ({gutter}) => {
                        let style = {};
                        console.log(gutter, 52);

                        if (gutter) {
                            style = {
                                paddingLeft: gutter / 2 + 'px',
                                paddingRight: gutter / 2 + 'px'
                            }
                        }
                        console.log(style, 60);
                        return <div {...others} style={style} className={classes}>
                            {children}
                        </div>
                    }
                }

            </RowContext.Consumer>
        )
    }
}

export default Col;
