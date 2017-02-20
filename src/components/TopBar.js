/**
 * Created by Jsceoz on 2017/2/7.
 */
import React from 'react';

class TopBar extends React.Component {
    render() {
        return (
            <header className="header">
                <h3 className="header-title">武汉大学学生会新闻网</h3>
                <div className="header-tab-bar">
                    <a href="#" className="tab-item tab-item-active">新闻</a>
                    <a href="#" className="tab-item">图集</a>
                    <a href="#" className="tab-item">视频</a>
                    <a href="#" className="tab-item">直播</a>
                    <div className="tab-line"></div>
                </div>
            </header>
        )
    }
}

export default TopBar;