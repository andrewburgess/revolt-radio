import * as React from "react"
import { FaSpotify } from "react-icons/fa"
import styled from "styled-components"

import { authorize } from "../lib/spotify"
import { SocketContext } from "../context/socket"
import { MESSAGE_TOKEN } from "../constants"

export interface IAuthorizeProps {
    className?: string
}

const onAuthorizeClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, ws: WebSocket) => {
    event.preventDefault()

    const tokens = await authorize()

    ws.send(
        JSON.stringify({
            payload: tokens,
            type: MESSAGE_TOKEN
        })
    )
}

const Authorize: React.SFC<IAuthorizeProps> = (props) => {
    const { ws } = React.useContext(SocketContext)

    return (
        <div className={props.className}>
            <button type="button" onClick={(event) => onAuthorizeClick(event, ws)}>
                <FaSpotify /> Login to Spotify
            </button>
        </div>
    )
}

export default styled(Authorize)`
    button {
        align-items: center;
        background: var(--spotify);
        border: none;
        color: #fff;
        display: flex;
        font-size: 1.6rem;
        padding: 1rem;
        text-transform: uppercase;

        & > svg {
            margin-right: 0.5em;
        }
    }
`
