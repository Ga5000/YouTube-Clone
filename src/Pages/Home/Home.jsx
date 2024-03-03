import React, { useState } from "react";
import "./Home.css";
import SideBar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";


const Home = ({sidebar}) => {

    const [category,setCategory] = useState(0);
    return (
        <>
        <SideBar sidebar={sidebar} category={category} setCategory={setCategory}/>
        <div className={`container ${sidebar ? "" : "large-container"}`}>
            <Feed category={category}/>
        </div>
        </>
    );
};

export default Home