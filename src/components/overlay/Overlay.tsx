import { FC, ReactNode, memo } from "react";
import { createPortal } from "react-dom";
import { OverlayComponent } from "./Overlay.styles";
import { Coordinates } from "../../types/Coordinates";

interface OverlayProps {
    id: string;
    anchorId?: string;
    children: ReactNode;
    width?: string | number;
    height?: string | number;
    coordinates?: Coordinates;
}
const Overlay: FC<OverlayProps> = (props) => {
    const {
        id,
        anchorId,
        children,
        width,
        height,
        coordinates,
    } = props;

    let top = coordinates?.top ?? 0;
    let left = coordinates?.left ?? 0;

    return createPortal(
        <OverlayComponent
            id={id}
            top={top}
            left={left}
            width={width}
            height={height}
            coordinates={coordinates}
        >
            {children}
        </OverlayComponent>,
        anchorId ? (document.getElementById(anchorId) as HTMLElement) : document.body,
    );
};
export default memo(Overlay);
