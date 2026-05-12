import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";

import {Main} from "./pages/main";
import BluePill from "./pages/bluePill";
import ImageLib from "./pages/imageLib";
import BluePillHindi from "./pages/bluePillHindi";
import BluePillPortugese from "./pages/bluePillPortugese";
import BluePillSpanish from "./pages/bluePillSpanish";
import BluePillTurkish from "./pages/bluePillTurkish";
import BluePillRussian from "./pages/bluePillRussian";

export const Router = () => {
    return (<Routes>
            <Route path="/" element={<Main/>}/>
            <Route path={`/thebluepill`} element={<BluePill/>}/>
            <Route path={`/thebluepill/hi`} element={<BluePillHindi/>}/>
            <Route path={`/thebluepill/po`} element={<BluePillPortugese/>}/>
            <Route path={`/thebluepill/sp`} element={<BluePillSpanish/>}/>
            <Route path={`/thebluepill/tu`} element={<BluePillTurkish/>}/>
            <Route path={`/thebluepill/ru`} element={<BluePillRussian/>}/>
            <Route path={`/images`} element={<ImageLib/>}/>
            <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>);
};
