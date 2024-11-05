import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header>Header</header>
            <main>{children}</main>
            <footer>Footer</footer>
        </>
    );
};

export default Layout;
