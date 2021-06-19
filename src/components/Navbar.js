import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand" >Weather Data</p>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <p className="nav-link" >Home</p>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://docs.openaq.org/v2/locations" >API link</a>
                        </li>
                        
                    </ul>
                </div>
            </div>           
        </div>
            )
}

            export default Navbar
