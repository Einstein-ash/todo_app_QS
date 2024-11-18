import './UserIcon.css'
import { FaCircle } from 'react-icons/fa6'

const UserIcon = ({ intials, available, bgColor }) => {
    return (
        <div className='user'>
            <div className='user_icon' style={{ backgroundColor: bgColor }}>{intials}</div>
            <div className='dot' style={available ? { color: "#60C703" } : {}}>
                <FaCircle />
            </div>
        </div>
    )
}

export default UserIcon