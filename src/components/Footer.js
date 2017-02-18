/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="footer-middle-section">
                    <div className="footer-col">
                        <h1 className="footer-headline">动态</h1>
                        <ul className="footer-link-list">
                            <li><a href="#">新闻中心</a></li>
                            <li><a href="#">活动直播</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1 className="footer-headline">服务</h1>
                        <ul className="footer-link-list">
                            <li><a href="#">权益反馈</a></li>
                            <li><a href="#">二手市场</a></li>
                            <li><a href="#">失物招领</a></li>
                            <li><a href="#">下载中心</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1 className="footer-headline">办公</h1>
                        <ul className="footer-link-list">
                            <li><a href="#">办公平台</a></li>
                            <li><a href="#">文档中心</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1 className="footer-headline">社交媒体和应用</h1>
                        <ul className="footer-link-list">
                            <li><a href="#">新浪微博</a></li>
                            <li><a href="#">微信公众平台</a></li>
                            <li><a href="#">Android</a></li>
                            <li><a href="#">iOS</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h1 className="footer-headline">联系</h1>
                        <ul className="footer-link-list">
                            <li><a href="#">建议反馈</a></li>
                            <li><a href="#">投诉举报</a></li>
                            <li><a href="#">合作联系</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2017 武汉大学学生会 </p>
                </div>
            </footer>
        )
    }
}

export default Footer;