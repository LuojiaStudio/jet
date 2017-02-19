/**
 * Created by Jsceoz on 2017/2/7.
 */
import React from 'react';
import MenuItem from './MenuItem';
import Loading from './Loading';


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolList: []
        };
        this.getNavList = this.getNavList.bind(this)
    }

    componentWillMount() {
        this.getNavList();
    }

    getNavList() {
        let self = this;
        fetch(window.the_url + "/news/tag/?is_source=true").then(function (response) {
            response.json().then(function (data) {
                console.log(data);
                self.setState({
                    schoolList: data.results
                })
            })
        })
    }

    render() {
        return (
           <aside className="side-bar">
               <li>
                <a href="#/1/">校园</a>
               </li>
               <li>
                   <a href="#/2/">聚焦</a>
               </li>
               <li>
                   <a href="#/3/">人物</a>
               </li>
               <li>
                   <a href="#/4/">评论</a>
               </li>
               <li>
                   <a href="#/5/">特写</a>
               </li>
               <MenuItem
                   title="院系"
                   children={this.state.schoolList.map(school => (
                       <a href={"#/" + school.id + "/"}>{school.name}</a>
                   ))}
               />
           </aside>
        )

}
}
export default SideBar;