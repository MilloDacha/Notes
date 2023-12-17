import React from "react";

function Footer() {
    var date = new Date();
    return (
        <footer>Copyright &copy; {date.getFullYear()}</footer>
    );
}

export default Footer;