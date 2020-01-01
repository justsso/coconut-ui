import * as React from 'react';
import classNames from 'classnames';


export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
    prefixCls?: string;
    hasSider?: boolean
}

interface BasicPropsWithTagName extends BasicProps {
    tagName: 'header' | 'footer' | 'main' | 'section'
}

export interface LayoutContextProps {
    siderHook: {
        addSider: (id: string) => void;
        removeSider: (id: string) => void
    }
}

export const LayoutContext = React.createContext<LayoutContextProps>({
    siderHook: {
        addSider: () => null,
        removeSider: () => null
    }
});

export interface GeneratorProps {
    suffixCls: string;
    tagName: 'header' | 'footer' | 'section' | 'main'
}

function generator({suffixCls: string, tagName: string}: GeneratorProps) {
    return (BasicComponent: any) => {
        return class Adapter extends React.Component<BasicProps, any> {
            static Header: any;
            static Footer: any;
            static Content: any;
            static Sider: any;


            render() {
                const {prefixCls} = this.props;

                return (
                    <BasicComponent prefixCls={prefixCls} tagName={tagName} {...this.props}  ></BasicComponent>
                )
            }


        }
    }
}

const Basic = (props: BasicPropsWithTagName) => {
    const {prefixCls, className, children, tagName, ...others} = props;
    const classString = classNames(className, prefixCls);
    return React.createElement(tagName, {className: classString, ...others}, children);
}


class BasicLayout extends React.Component<BasicPropsWithTagName, any> {

    state = {siders: []};

    getSiderHook() {
        return {
            addSider: (id: string) => {
                this.setState((state) => {
                    return {siders: [...state.siders, id]}
                })
            },
            removeSider: (id: string) => {
                this.setState(state => ({
                    siders: [state.siders.filter(currentId => currentId != id)]
                }))
            }
        }
    }


    render() {
        const {children, prefixCls, className, hasSider, tagName: Tag, ...others} = this.props;
        const classString = classNames(className, prefixCls, {
            [`${prefixCls}-has-sider`]: typeof hasSider === 'boolean' ? hasSider : this.state.siders.length > 0
        });
        return (
            <LayoutContext.Provider value={{siderHook: this.getSiderHook()}}>
                <Tag classname={classString} {...others}>
                    {children}
                </Tag>
            </LayoutContext.Provider>
        )
    }

}

const Layout: React.ComponentClass<BasicProps> & {
    Header: React.ComponentClass<BasicProps>;
    Footer: React.ComponentClass<BasicProps>;
    Content: React.ComponentClass<BasicProps>;
    Sider: React.ComponentClass<BasicProps>;
} = generator({suffixCls: 'layout', tagName: 'section'})(BasicLayout);


const Header = generator({suffixCls: 'layout-header', tagName: 'header'})(Basic);

const Footer = generator({suffixCls: 'layout-footer', tagName: 'footer'})(Basic);

const Content = generator({suffixCls: 'layout-content', tagName: 'main'})(Basic);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
//Layout 导出Header Sider Content
export default Layout;
