import React from 'react'
import {Link} from 'react-router-dom'

const UserMenu = () => (<>
<nav>
    <ol>
        <li><Link to='/user/login'>UserLogin</Link></li>
        <li><Link to='/user/register'>UserRegister</Link></li>
        <li><Link to='/user/update'>UserUpdate</Link></li>
        <li><Link to='/user/remove'>UserRemove</Link></li>
    </ol>
</nav> 


</>)   

export default UserMenu