import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MealPlanner from "./MealPlanner";
import List from "./List";

import { useState } from "react";

function AppRouter() {

    const [childData, setChildData] = useState("");

    if (!childData) {

        return <MealPlanner passChildData={setChildData}/>
    }
    else {
        return <List data={childData}/>
    }
}

export default AppRouter;