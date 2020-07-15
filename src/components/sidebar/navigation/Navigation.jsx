import React from "react";

import {BrowserRouter as Router, Link} from "react-router-dom";

function Navigation() {
    return <div>
        <h2>Navigation</h2>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dialogs">Messages</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
    </div>
}

export default Navigation;