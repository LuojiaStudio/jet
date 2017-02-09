/**
 * Created by Jsceoz on 2017/2/7.
 */
import React from 'react';

class TopBar extends React.Component {
    render() {
        return (
            <div className="top-bar mdl-layout mdl-js-layout">
                <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
                    <div className="mdl-layout--large-screen-only mdl-layout__header-row">
                    </div>
                    <div className="mdl-layout--large-screen-only mdl-layout__header-row">
                        <h3>武汉大学学生会新s闻网</h3>
                    </div>
                    <div className="mdl-layout--large-screen-only mdl-layout__header-row">
                    </div>
                    <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
                        <a href="#" className="mdl-layout__tab is-active">新闻</a>
                        <a href="#" className="mdl-layout__tab">图s集</a>
                        <a href="#" className="mdl-layout__tab">视频</a>
                    </div>
                </header>
            </div>
        )
    }
}

export default TopBar;