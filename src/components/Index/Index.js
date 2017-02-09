/**
 * Created by Jsceoz on 2017/2/8.
 */
import React from 'react';
import TopBar from '../TopBar/TopBar';
import SideBar from '../SideBar/SideBar';
import NewsList from '../NewsList/NewsList';
import Footer from '../Footer/Footer';
import './Index.css';

class Index extends React.Component {
    render() {
        return (
            <div className="index">
                <TopBar/>
                <main className="main-container mdl-layout__content">
                    <div className="mdl-grid mdl-grid--no-spacing">
                        <SideBar/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Index;