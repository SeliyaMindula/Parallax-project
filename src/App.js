import React from "react";
import Header from "./components/Header";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';


const App = () => {
  return (
    <div className="container-fluid p-0 full-height">
    <Header />
    <div className="row no-gutters full-height">
      <div className="col-12 col-md-6 p-3">
        <div className="pane-container">
          <LeftPane />
        </div>
      </div>
      <div className="col-12 col-md-6 p-3">
        <div className="pane-container">
          <RightPane />
        </div>
      </div>
    </div>
  </div>
  );
};

export default App;
