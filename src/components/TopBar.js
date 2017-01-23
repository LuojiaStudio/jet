/**
 * Created by Jsceoz on 2017/1/22.
 */
import React from 'react'
import AppBar from 'material-ui/AppBar'
import Search from 'material-ui/svg-icons/action/search'
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer'

const style = {
    backgroundColor: "#3F51B5",
};
const search_icon_style = {
    fontSize: 60,
    color: "#ffffff",
}

class TopBar extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    style={style}
                    title="武汉大学学生会新闻网"
                    iconElementRight={<IconButton><Search/></IconButton>}
                    zDepth={10}
                />
            </div>
        )
    }
}

export default TopBar;