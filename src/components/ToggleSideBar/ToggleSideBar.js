import './ToggleSideBar.scss';
import {useState} from 'react'


function ToggleSideBar(props) {
    const [tranform] = useState(0)

    const toggleSideBar = () => {
        props.setTransform(tranform)
    }

    return (
        <div className="open-side-bar" onClick={toggleSideBar}>
            <i className="fas fa-bars"></i>
        </div>
    )
}

export default ToggleSideBar;