/**
 * Created by Jsceoz on 2017/2/21.
 */
import React from 'react';

class Notification extends React.Component {

    render() {
        let display = this.props.open ? "block" : "none";
        return (
            <div className="notification" style={{display: display}}>
                {this.props.message}
            </div>
        )
    }
}

export default Notification;