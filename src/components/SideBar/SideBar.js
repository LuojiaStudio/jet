/**
 * Created by Jsceoz on 2017/2/7.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import './SideBar.css'

class SideBar extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <Drawer open={true}>

                </Drawer>
            </div>
        )
    }
}

export default SideBar;