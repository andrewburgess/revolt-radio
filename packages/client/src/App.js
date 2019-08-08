import React from "react"
import { normalize } from "polished"
import styled, { createGlobalStyle } from "styled-components"

import { AppProvider } from "./context/app"
import MainPanel from "./components/MainPanel"
import { Colors } from "./style"

const GlobalStyles = createGlobalStyle`
    ${normalize()}

    @import url('https://fonts.googleapis.com/css?family=Raleway:500,700,900&display=swap');

    :root {
        font-size: 62.5%;
    }

    html {
        background-color: ${Colors.background};
        color: #fff;
        font-family: 'Raleway', sans-serif;
    }

    html, body, #root {
        height: 100%;
        max-height: 100%;
        min-height: 320px;
        overflow: hidden;
    }

    body {
        font-size: 1.6rem;
    }

    * {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, ul {
        margin: 0;
        padding: 0;
    }
`

const App = (props) => {
    return (
        <AppProvider>
            <>
                <GlobalStyles />
                <header className={props.className}>
                    <h1>
                        <span>REVOLT</span> RADIO
                    </h1>
                </header>
                <MainPanel />
            </>
        </AppProvider>
    )
}

export default styled(App)`
    background-color: ${Colors.background};
    left: 0;
    padding: 0.5rem;
    position: fixed;
    top: 0;
    max-width: 100vw;
    width: 100%;

    h1 {
        font-size: 3rem;
        font-weight: 900;
        margin: 0;
        text-align: center;
    }

    h1 > span {
        color: ${Colors.primary};
    }
`
