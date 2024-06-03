import { Route, Routes } from "react-router-dom";

import { Pages } from "@/pages";

export const Router = () => {
    return (
        <Routes>
            <Route path='login' element={<Pages.Login />} />

            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};