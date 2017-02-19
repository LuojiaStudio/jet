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
                加载中
            </div>
        )
    }
}

export default Loading;