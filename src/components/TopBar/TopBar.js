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
                    style={{backgroundColor:'#3F51B5'}}
                    iconElementRight={
                        <div className="top-bar-el-right-wrapper">
                            <FlatButton
                                labelStyle={{color:'#ffffff'}}
                                label='登录'/>
                            <FlatButton
                                labelStyle={{color:'#ffffff'}}
                                label='注册'/>
                        </div>
                        }
                />
            </div>
        )
    }
}

export default TopBar;