/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import TopBar from './TopBar';
import SideBar from './SideBar';
import NewsList from './NewsList';
import Footer from './Footer';

class Index extends React.Component {

    render() {
        return (
            <div className="root-wrapper">
                <TopBar/>
                <main className="page-container">
                    <main className="news-page-content">
                        <SideBar/>
                        <NewsList
                            tag={this.props.params.tag}
                            search={this.props.params.search}
                        />
                    </main>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Index;