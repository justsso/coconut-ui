import * as React from 'react';
import * as PropTypes from 'prop-types';
import RowContext from "./RowContext";
import classNames from 'classnames';
import './style/index.less';
import {BasicProps} from "../@types/common";

type ColSpanType = number | string;

export interface ColSize {
    span?: ColSpanType,
    order?: ColSpanType,
    offset?: ColSpanType,
    push?: ColSpanType,
    pull?: ColSpanType
}

export interface ColProps extends BasicProps{
    span?: ColSpanType,
    offset?: ColSpanType,
    prefixCls?: string,
    order?: number,
    push?: ColSpanType,
    pull?: ColSpanType,
    xs?: ColSpanType | ColSize;
    sm?: ColSpanType | ColSize;
    md?: ColSpanType | ColSize;
    lg?: ColSpanType | ColSize;
    xl?: ColSpanType | ColSize;
    xxl?: ColSpanType | ColSize;
}

class Col extends React.Component<ColProps, {}> {
    static propTypes = {
        span: PropTypes.number,
        offset: PropTypes.number,
        children: PropTypes.node,
        order: PropTypes.number
    };

    constructor(props: any) {
        super(props);
        this.state = {
            cls: 'col'
        }
    }

    static defaultProps = {
        offset: 0
    };

    componentDidMount(): void {
    }

    renderCol() {

    }


    render() {
        const {children, className, span, offset, order, push, pull, ...others} = this.props;
        //因为涉及到响应式，比较特殊，所以把xs sm md xl xxl相关的放在others中
        const prefixCls = 'coconut-col';

        //分析响应式
        let sizeClassObj = {};
        ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(size => {
            let sizeProps: ColSize = {};
            const propSize = (this.props as any)[size];   //取响应式的值
            if (typeof propSize === "number") {
                sizeProps.span = propSize
            } else if (typeof propSize === "object") {
                sizeProps = propSize || {}
            }
            delete (others as any)[size];

            sizeClassObj = {
                ...sizeClassObj,
                [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
                [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
                [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
                [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
                [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0
            };
        });


        //分析classes
        const classes = classNames(
            prefixCls,
            {
                [`${prefixCls}-span-${span}`]: span !== undefined,
                [`${prefixCls}-offset-${offset}`]: offset,
                [`${prefixCls}-order-${order}`]: order,
                [`${prefixCls}-push-${push}`]: push,
                [`${prefixCls}-pull-${pull}`]: pull
            },
            className && className?.join(' '),
            sizeClassObj   //响应式要覆盖前面的 span offset order push pull 属性，响应式优先级高
        );

        return (
            <RowContext.Consumer>
                {
                    ({gutter}) => {
                        let style = {};

                        if (gutter) {
                            style = {
                                paddingLeft: gutter / 2 + 'px',
                                paddingRight: gutter / 2 + 'px'
                            }
                        }
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
