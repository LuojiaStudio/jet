/**
 * Created by Jsceoz on 2017/2/7.
 */
import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import './SideBar.css'

class SideBar extends React.Component {
    render() {
        return (
            <div className="side-bar">
                <Drawer open={true}>
                    <AppBar
                        title='新闻中心'
                        showMenuIconButton={false}
                        style={{backgroundColor:'#3F51B5'}}
                    />
                    <Subheader>搜索</Subheader>
                    <div className="side-bar-search-wrapper">
                        <TextField
                            hintText="搜索文章标题"
                        />
                    </div>
                    <List>
                        <Subheader>分类</Subheader>
                        <ListItem
                            className="side-bar-list-item"
                            primaryText='校园'/>
                        <ListItem primaryText='聚焦'/>
                        <ListItem primaryText='人物'/>
                        <ListItem primaryText='评论'/>
                        <ListItem primaryText='特写'/>
                        <ListItem
                            primaryText='院系'
                            primaryTogglesNestedList={true}
                            nestedItems={[
                                <ListItem
                                    primaryText='哲学学院'
                                />,
                                <ListItem
                                    primaryText='国学院'
                                />,
                                <ListItem
                                    primaryText='文学院'
                                />,
                                <ListItem
                                    primaryText='计算机学院'
                                />,
                            ]}
                        />
                    </List>
                </Drawer>
            </div>
        )
    }
}

export default SideBar;