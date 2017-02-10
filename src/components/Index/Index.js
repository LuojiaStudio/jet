/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import TopBar from '../TopBar/TopBar';
import NewsPage from '../NewsPage/NewsPage';
import Footer from '../Footer/Footer';

class Index extends React.Component {
    render() {
        return (
            <div className="root-wrapper">
                <TopBar/>
                <main className="page-container">
                    <NewsPage/>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Index;