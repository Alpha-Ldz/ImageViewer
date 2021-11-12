import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './transition.css'

function ImageViewer(props) {
    const [index, setIndex] = React.useState(0);
    const panels = props.panels;

    React.useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex(index => (index + 1) % ((3) * 6))
        },
          1000
        );
        return () => clearTimeout(intervalId);
      }, []);

    return (
        <div className = "group">
            <div className= "side">
                <TransitionGroup component={null}>
                    {panels[Math.trunc(index/6)].id === Math.trunc((index + 1) / 6) && (
                        <CSSTransition classNames = "title" timeout={900}>
                            <div className = "title--overlay">
                                <div className = "titleDiv">{panels[Math.trunc(index/6)].panel.title}</div>
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
                <TransitionGroup component={null}>
                    {panels[Math.trunc(index/6)].id === Math.trunc((index + 1) / 6) && (
                        <CSSTransition classNames = "content" timeout={900}>
                            <div className = "content--overlay">
                                <h2 className = "content">{panels[Math.trunc(index/6)].panel.content}</h2>
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
                <TransitionGroup component={null}>
                {panels[Math.trunc(index/6)].id === Math.trunc((index + 1) / 6) && (
                        <CSSTransition classNames = "button" timeout={900}>
                            <div className = "content--overlay">
                                <h2 className = "content">{panels[Math.trunc(index/6)].panel.content}</h2>
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>

            <div className = "imageDiv">
                <TransitionGroup component={null}>
                    {panels[Math.trunc(index/6)].id === Math.trunc((index + 1) / 6) && (
                        <CSSTransition classNames = "image" timeout={900}>
                            <img src = {panels[Math.trunc(index/6)].panel.image} alt= "" key = "" width = "100%" />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
}

export default ImageViewer;