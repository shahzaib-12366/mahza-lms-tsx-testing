import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb() {
    return (
        <div className="breadcrumb-wraper">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/teacher">Dashboard /</Link></li>
                    <li className="breadcrumb-item"><Link to="/courses">Courses /</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Course</li>
                </ol>
            </nav>
            <h1>Create A Course</h1>
        </div>
    );
}

export default Breadcrumb;
