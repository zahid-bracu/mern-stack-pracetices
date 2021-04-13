import React from 'react'

export default function About() {
    return (
        <div className="container">
            <h5 className="">About the Application</h5>
            <p>This is a full pern stack application. This application is built with ReactJs, NodeJs, ExpressJs, PostgreSQL Database.
                User can add delete update & read restaurant information from this application. User can also add comment & give ratings about
                various restaurants in this application. 
            </p>

            <h5 className="">Basic Operation</h5>
            <ul className="list-unstyled">
                <li>Create</li>
                <li>Read</li>
                <li>Update</li>
                <li>Delete</li>
                <li>Add data</li>
                <li>SQL Query run</li>
                <li>Posting Comment for individual data</li>
                <li>Dyanamic data display</li>
            </ul>


            <h5 className="">About developer</h5>
            <ul className="list-unstyled">
                <li>github : https://github.com/zahid-bracu <a target="_blank" href="https://github.com/zahid-bracu">Click here</a> </li>
                <li>mail : zahid.mym@gmail.com</li>
            </ul>

            
        </div>
    )
}
