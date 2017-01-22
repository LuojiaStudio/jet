/**
 * Created by Jsceoz on 2017/1/22.
 */
import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class Slide extends React.Component {
    render() {
        return (
            <div>
                <Drawer
                    open={true}
                >
                    <MenuItem>menuitem</MenuItem>
                </Drawer>
            </div>
        )
    }
}

export default Slide;