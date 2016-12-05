import React from 'react';
import {Link} from 'react-router';

export default class AppLayout extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/orders">Orders</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}
