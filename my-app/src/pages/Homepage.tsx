// import React, { useEffect, useState } from "react";
import NavbarExample from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import CreatePost from "./CreateForm";
// import CardList from "../components/Postlist";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const HomePage: React.FC = () => {
    return (
        <div className="homepage-container">
            <NavbarExample showButton={true} />
        </div >
    );
};
export default HomePage;
