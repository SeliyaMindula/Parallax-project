import React, { useState, useEffect, useRef } from 'react';
import items from '../items.json';
import "./RightPane.css"

const RightPane = () => {
    const itemHeight = 300;

    const initialItemCount = Math.max(12, Math.floor((window.innerHeight - 150) / itemHeight));

    const [displayedItems, setDisplayedItems] = useState(items.slice(0, initialItemCount));
    const paneRef = useRef(null);

    const getImagePath = (imageName) => {
        try {
            return require(`../assets/img/${imageName}`);
        } catch (e) {
            console.warn(`Unable to load image: ${imageName}`);
            return "";
        }
    };

    const handleScroll = () => {
        if (paneRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = paneRef.current;
            if (scrollTop + clientHeight >= scrollHeight) {
                const moreItems = items.slice(displayedItems.length, displayedItems.length + 8);
                setDisplayedItems(prevItems => [...prevItems, ...moreItems]);
            }
        }
    };

    useEffect(() => {
        const pane = paneRef.current;
        if (pane) {
            pane.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (pane) {
                pane.removeEventListener('scroll', handleScroll);
            }
        };
    }, [displayedItems]);

    return (
        <div className="right-pane" >
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
            <div ref={paneRef} style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 150px)', minHeight: '500px' }}>
                <div className="item-cards d-flex flex-wrap justify-content-center">

                    {displayedItems.map((item) => (
                        <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2 p-1">

                            <div className="card custom-card" style={{ width: '100%', boxSizing: 'border-box' }}>
                                <div id={`carouselExampleSlidesOnly${item.id}`} className="carousel slide p-2" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {item.images.map((imageName, idx) => (
                                            <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                                                <img src={getImagePath(imageName)} className="d-block w-100" alt={item.title} />
                                            </div>
                                        ))}
                                    </div>


                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.price}</p>
                                    <p className="card-text"><small className="text-muted">{item.details}</small></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="button-group pt-3 text-center">
                <button className="button-custom button-cash">Cash</button>
                <button className="button-custom button-pay">Pay</button>
                <button className="button-custom button-pay">Card</button>
                <button className="button-custom button-pay">Credit</button>
            </div>

        </div>
    );
};

export default RightPane;
