import React, {ReactNode} from "react";

export type panelKey = number | string

export interface PanelProp {
    panel_key: panelKey,
    title: string,
    children: ReactNode,
    // active: boolean
}

export default function Panel(props: PanelProp) {
    return <div key={props.panel_key}/>
}
