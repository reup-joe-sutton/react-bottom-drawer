import * as React from "react";
interface IProps {
    isVisible: boolean;
    onClose: () => void;
    velocityClose: () => void;
    duration?: number;
    hideScrollbars?: boolean;
    unmountOnExit?: boolean;
    mountOnEnter?: boolean;
    className?: string;
    backdropClassname?: string;
    children?: React.ReactNode;
}
declare const SlideUpTransition: ({ isVisible, children, onClose, velocityClose, unmountOnExit, mountOnEnter, duration, hideScrollbars, className, }: IProps) => JSX.Element;
export default SlideUpTransition;
