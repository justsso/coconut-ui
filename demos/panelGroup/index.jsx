import {PanelGroup, Panel} from "../../src/components";
import React from "react";

function Index() {
    return (
        <PanelGroup onChange={(panelName) => {
            console.log(panelName, '我改变了')
        }}
                    accordion
        >
            <Panel title={'标题一'} name={'111'}>
                If you don't know anything about this new React feature, checkout this introduction to React Hooks. If you want to checkout the finished project for the showcased examples that show how to fetch data in React with Hooks, checkout this GitHub repository.
                If you just want to have a ready to go React Hook for data f
            </Panel>
            <Panel title={'标题三'} name={'222'}>
                If you don't know anything about this new React feature, checkout this introduction to React Hooks. If you want to checkout the finished project for the showcased examples that show how to fetch data in React with Hooks, checkout this GitHub repository.
                If you just want to have a ready to go React Hook for data f
            </Panel>
            <Panel title={'标题二'} name={'333'}>
                If you don't know anything about this new React feature, checkout this introduction to React Hooks. If you want to checkout the finished project for the showcased examples that show how to fetch data in React with Hooks, checkout this GitHub repository.
                If you just want to have a ready to go React Hook for data f
            </Panel>
        </PanelGroup>
    )
}

export default Index
