/**
 * Created by Jsceoz on 2017/2/7.
 */
import React from 'react';
import MenuItem from './MenuItem';

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
                self.setState({
                    schoolList: data.results
                })
            })
        })
    }

    render() {
        return (
           <aside id="js_side_bar" className="side-bar">
               <MenuItem
                   title="校园"
                   href="#/category/1/"
               />
               <MenuItem
                   title="聚焦"
                   href="#/category/2/"
               />
               <MenuItem
                   title="人物"
                   href="#/category/3/"
               />
               <MenuItem
                   title="评论"
                   href="#/category/4/"
               />
               <MenuItem
                   title="特写"
                   href="#/category/5/"
               />
               <MenuItem
                   title="院系"
                   children={this.state.schoolList.map(school => (
                       <a href={"#/category/" + school.id + "/"}>{school.name}</a>
                   ))}
               />
           </aside>
        )

}
}
export default SideBar;