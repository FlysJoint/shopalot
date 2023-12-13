import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MealPlanner from "./MealPlanner";
import List from "./List";

import { useState } from "react";

function AppRouter() {

    const [childData, setChildData] = useState("");

    // console.log(childData);

    if (!childData) {

        return <MealPlanner passChildData={setChildData}/>
    }
    else {
        return <List data={childData}/>
    }

    // return (
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/" element={
    //                 <MealPlanner passChildData={setChildData}/>
    //             } />

    //             {/* <Route path="/planned" element={} /> */}

    //             <Route path="/list" element={
    //                 <List data={childData}/>
    //             } />
    //         </Routes>
    //     </BrowserRouter>
    // )

}

export default AppRouter;