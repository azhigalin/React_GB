import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './Routes.css';
import { Chats } from "../components/Chats/Chats";
import { Profile} from "../components/Profile/Profile";
import { Error} from "../components/Error/Error"
import { Home} from "../components/Home/Home"
import { Cataas } from "../components/CATAAS/Cataas";
import { SignUp } from "../components/SignUp/SignUp"

export const Routers = () => {
  return (
    <BrowserRouter>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/" className="Nav">
            Home
        </Link>
        <Link to="/chats" className="Nav">
            Chats
        </Link>
        <Link to="/profile" className="Nav">
            Profile
        </Link>
        <Link to="/cataas" className="Nav">
            Cataas
        </Link>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/chats" element={<Chats />}>
                <Route exact path="/chats/:chatId" element={<Chats />} />
            </Route>
            {/* <Route exact path="/chats/:chatId" element={<Chats />} /> */}
            <Route path="/cataas" element={<Cataas />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
);;}