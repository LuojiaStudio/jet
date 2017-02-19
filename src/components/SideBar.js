/**
 * Created by Jsceoz on 2017/2/7.
 */
import React from 'react';


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
           <aside className="side-bar">
               <a href="#/1/">校园</a>
               <a href="#/2/">聚焦</a>
               <a href="#/3/">人物</a>
               <a href="#/4/">评论</a>
               <a href="#/5/">特写</a>
               <a href="#">院系</a>
           </aside>
        )

}
}
export default SideBar;