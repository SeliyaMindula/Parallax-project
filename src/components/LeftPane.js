import React from 'react';
import "./LeftPane.css"


const LeftPane = () => {
    return (
        <div className="left-pane">
            <div className="selects-container mb-3">
                <div className="select-boxes mb-3 row">
                    <div className="col">
                        <select className="form-select">
                            <option>Please Select</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-select">
                            <option>Please Select</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-select">
                            <option>Please Select</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="info-table mb-3">
                <div className="table-header">
                    <div>PRODUCT</div>
                    <div>QUANTITY</div>
                    <div>UNIT PRICE</div>
                    <div>LINE PRICE</div>
                </div>
                <div className="table-content" style={{ padding: '10px' }}>
                    <p>Please Select Product Item</p>
                </div>
            </div>

            <div className="summary-section">
                <div className='mb-3'>
                    <div className="button-group pt-3 text-center">
                        <button className="button-custom button-des">Payemt<br></br>Rs.80.00</button>
                        <button className="button-custom button-des">Discount <br></br>Rs.0.00</button>
                        <button className="button-custom button-des">Tax<br></br>Rs.500.00</button>
                        <button className="button-custom button-des">Sleeping<br></br>Rs.100.00</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LeftPane;