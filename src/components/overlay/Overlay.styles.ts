import styled from "styled-components";
import { Coordinates } from "../../types/Coordinates";

export const OverlayComponent = styled.div<{
    top?: number;
    left?: number;
    width?: string | number;
    height?: string | number;
    coordinates?: Coordinates;
}>`
    z-index: 1;
    ${(props) =>
        `position: fixed;
         top: ${props.top ? props.top : 0}px;
         left: ${props.left ? props.left : 0}px;
         margin: auto;
         background-color: 'rgba(0,0,0,0.7)'};
    `};
`;