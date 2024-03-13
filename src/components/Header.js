import React from 'react';
import './Header.css'; 

const Header = () => {
    // Dummy data 
    const storeName = 'STOREMATE';
    const currentDate = '11/1/2023 | Wednesday';
    const userName = 'Kumanayaka';

    return (
        <header className="bac text-dark py-2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col">
                        <select className="me-3">
                            <option value="select">Please Select</option>
                        </select>
                        <span className="date">{currentDate}</span>
                    </div>
                    <div className="col text-center">
                        <span className="store-name">{storeName}</span>
                    </div>
                    <div className="col text-end">
                        <span className="user-name">{userName}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
