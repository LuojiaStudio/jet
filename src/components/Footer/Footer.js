/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <span>©2017武汉大学学生会</span><a href="">建议反馈</a> · <a href="">举报投诉</a> · <a href="">合作联系</a>
            </div>
        )
    }
}

export default Footer;