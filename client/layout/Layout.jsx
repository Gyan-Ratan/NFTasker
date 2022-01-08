import React from 'react';
import AppBar from "../todo/Navigation/AppBar";

function Layout({ children }) {
    return (<>
        <AppBar/>
        <main>{children}</main>
    </>);
}

export default Layout;
