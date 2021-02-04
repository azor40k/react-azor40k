import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
    let location = useLocation();

    return (
        <section>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </section>
    )
}
export default NotFound;
