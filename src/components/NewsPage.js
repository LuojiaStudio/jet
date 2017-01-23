/**
 * Created by Jsceoz on 2017/1/22.
 */
import React from 'react'
import Paper from 'material-ui/Paper'
import './news-page.css'

class NewsPage extends React.Component {
    render() {
        return (
            <div className="news-page">
                <Paper
                    zDepth={2}
                    className="news-page-paper"
                >
                </Paper>
            </div>
        )
    }
}

export default NewsPage;