/**
 * Created by Jsceoz on 2017/1/22.
 */
import React from 'react'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider';
import Favorite from 'material-ui/svg-icons/action/favorite'
import Visibility from 'material-ui/svg-icons/action/visibility'
import './news-page.css'

class NewsPage extends React.Component {
    render() {
        return (
            <div className="news-page">
                <Paper
                    zDepth={2}
                    className="news-page-paper"
                >
                    <h2 className="news-title">
                        知卓本科论坛：王法辉教授 用GIS讲述更好的故事
                    </h2>
                    <h3 className="news-subtitle">
                        ——这里是副标题
                    </h3>

                    <Divider />
                    <div className="news-content">
                        sdasdasd
                    </div>
                    <Divider />
                    <div className="news-detail-info-wrapper">
                        <span className="news-detail-like">
                                <Favorite/>
                            15
                        </span>
                        <span className="news-detail-view">
                                <Visibility/>
                            15
                        </span>
                        <span>作者：小明</span>
                        <span>编辑：小明</span>
                        <span>发布时间：5小时前</span>

                    </div>



                </Paper>
            </div>
        )
    }
}

export default NewsPage;