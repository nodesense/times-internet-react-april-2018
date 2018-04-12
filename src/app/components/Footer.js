import React from "react";

import PropTypes from "prop-types";

// functional component
// presentational component
// stateless component
// creates and returns virtual dom
export default function Footer(props) {
    console.log("Footer called ", props);

    // READ Only
    // props.title = "Change";

    return (
        <div>
            <hr />

            <p>Copyrights @{props.year}, {props.title}</p>

        </div>
    )
}

//keywords, validate prop data type
// mandatory or not
Footer.propTypes = {
    // mandatory
    year: PropTypes.number.isRequired,
    // optional
    title: PropTypes.string
}

//keyword
Footer.defaultProps = {
    // used when parent doesn't pass prop
    title: 'React App'
}