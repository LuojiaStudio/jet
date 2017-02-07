/**
 * Created by Jsceoz on 2017/2/7.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './TopBar.css'

class TopBar extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <AppBar
                    showMenuIconButton={false}
                    iconElementRight={
                        <div className="top-bar-el-right-wrapper">
                            <FlatButton label='登录'/>
                            <FlatButton label='注册'/>
                        </div>
                        }
                />
            </div>
        )
    }
}

export default TopBar;