/**
 * Created by Jsceoz on 2017/1/22.
 */
import React from 'react'
import AppBar from 'material-ui/AppBar'
import Search from 'material-ui/svg-icons/action/search'
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem';

const style = {
    backgroundColor: "#3F51B5",
};
const search_icon_style = {
    fontSize: 60,
    color: "#ffffff",
}

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    handleOpen() {
        this.setState({
            open: true
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }
    render() {
        return (
            <div>
                <AppBar
                    style={style}
                    title="武汉大学学生会新闻网"
                    iconElementRight={<IconButton><Search/></IconButton>}
                    zDepth={0}
                    onLeftIconButtonTouchTap={() => this.handleOpen()}
                />
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <AppBar
                        style={style}
                        title="选项"
                    />
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default TopBar;