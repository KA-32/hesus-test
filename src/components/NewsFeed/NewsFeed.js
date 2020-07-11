import React, { useState, useEffect } from 'react';

import NewsFeedRow from './NewsFeedRow';

import './NewsFeed.css';

const NewsFeed = () => {
    const [newsFeed, setNewsFeed] = useState([]);

    useEffect(() => {
        let data = [{
            title: "Centralise",
            date: "Oct 27, 2019",
            name: "Jack"
        }, {
            title: "Optimise",
            date: 'Oct 22, 2019',
            name: "Benjamin"
        }, {
            title: "Track",
            date: 'Oct 20, 2019',
            name: "Vincent"
        }];
        setNewsFeed(data);
    }, []);

    return (
        <section className="news-feed">
            <h2 className="news-feed-header">News Feed</h2>
            <ul className="news-feed-list">
                {
                    newsFeed.map((value, index) => {
                        return <NewsFeedRow key={value.date.toString() + index} {...value} />
                    })
                }
            </ul>
        </section>
    );
}

export default NewsFeed;
