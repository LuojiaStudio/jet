/**
 * Created by Jsceoz on 2017/2/19.
 */
import React from 'react';

class Loading extends React.Component {
    render() {
        let display;
        if (this.props.open) {
            display = "block"
        }
        else {
            display = "none"
        }
        return (
            <div
                style={{display: display}}
                className="loading">
                <div className="spinner">
                    <div className="rect1"></div>
                    <div className="rect2"></div>
                    <div className="rect3"></div>
                    <div className="rect4"></div>
                    <div className="rect5"></div>
                </div>
            </div>
        )
    }
}

export default Loading;