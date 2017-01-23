/**
 * Created by Jsceoz on 2017/1/22.
 */
import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import './slide.css'

class Slide extends React.Component {
    render() {
        return (
            <div className="slide">
                <Drawer
                    open={true}
                    containerStyle={{top: 64}}
                >
                    <MenuItem>menuitem</MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default Slide;