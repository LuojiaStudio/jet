/**
 * Created by Jsceoz on 2017/2/16.
 */
import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';

class NewsDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.getNewsDetail = this.getNewsDetail.bind(this)
    }

    componentDidMount() {
        this.getNewsDetail();
    }

    getNewsDetail() {
        let self = this;
        fetch(window.the_url + "news/article/" + this.props.id).then(function (response) {
            response.json().then(function (data) {
                self.setState({
                    article: data
                })
            })
        })
    }

    render() {
        return (
            <div className="news-detail-page">
                <TopBar/>
                <main className="news-detail-container">
                    <div className="news-detail-paper">
                        <div className="news-detail-header">
                            <div className="news-detail-tags">校园/评论</div>
                            <div className="news-detail-info">2016-11-16</div>
                        </div>
                        <div className="news-detail-content">
                            <h2 className="news-detail-title">新闻新闻</h2>

                        </div>
                        <div className="news-detail-action">

                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default NewsDetailPage;