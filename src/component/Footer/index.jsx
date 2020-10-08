import React from 'react';

export default function Footer () {
    return (
        <div>
           <nav className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Developed By: 
                        <span className="text-warning font-weight-normal"> Kawsar Ahamed </span>
                        , Using React JS &amp; Redux JS integrated with external movies data API
                        <a href="http://www.omdbapi.com/" target="_blank"> OMDB</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
