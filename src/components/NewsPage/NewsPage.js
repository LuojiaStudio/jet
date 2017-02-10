/**
 * Created by Jsceoz on 2017/2/9.
 */
import React from 'react';
import SideBar from '../SideBar/SideBar';
import NewsList from '../NewsList/NewsList';

class NewsPage extends React.Component {
    render() {
        return (
            <div className="news-page">
                <main className="news-page-content">
                    <SideBar/>
                    <NewsList/>
                </main>
            </div>
        )
    }
}

export default NewsPage;