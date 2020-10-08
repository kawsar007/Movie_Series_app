import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Header () {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand text-white text-lg brand-text" href="#">MoviesSeriesInfo</a>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fa fa-imdb fa-5x" id="imdb-logo"/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
