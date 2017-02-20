/**
 * Created by Jsceoz on 2017/2/19.
 */
import React from 'react';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayChildren: false
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let self = this;
        this.setState({
            displayChildren: !self.state.displayChildren
        })
    }


    render() {
        let content;
        let arrow;
        if (this.props.children) {

            if (this.state.displayChildren) {
                content = this.props.children;
                arrow = <i className="fa fa-chevron-up toggle-arrow" aria-hidden="true"/>
            }
            else {
                content = null;
                arrow = <i className="fa fa-chevron-down toggle-arrow" aria-hidden="true"/>

            }
        }
        else {
            arrow = null
        }


        return (
            <li>
                <a
                    onClick={this.handleClick}
                    className="menu-item"
                    href={this.props.href}
                >
                    {this.props.title}{arrow}
                </a>
                <div className="children">
                    {content}
                </div>
            </li>
        )
    }
}

export default MenuItem;
