import React from 'react';
import './NewsFeedRow.css';

const NewsFeedRow = ({ title, date, name }) => {
    return (
        <li className="newsfeed-row">
            <div className="newsfeed-color-strip"></div>
            <div className="newsfeed-row-info-wrapper">
                <div className="box"></div>
                <div className="newsfeed-row-info">
                    <h2 className="newsfeed-title">{title}</h2>
                    <div className="newsfeed-date-name-wrapper">
                        <span className="newsfeed-date">{date}</span>
                        <span className="newsfeed-name">{name}</span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default NewsFeedRow;
