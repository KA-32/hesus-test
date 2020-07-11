import React from 'react';

import Header from '../src/components/Header';
import Welcome from '../src/components/Welcome';
import About from '../src/components/About';
import NewsFeed from '../src/components/NewsFeed';
import Registration from '../src/components/Registration';

import './App.css';

const App = () => {
  return (
    <section className="app">
      <Header logo={"http://www.hesus.eu/wp-content/uploads/2017/03/Fichier-1logo-hesus-english.jpg"} />
      <section className="main-container">
        <section>
          <Welcome name={'Jack'} description={`We are always looking forward to meeting new talents! You are willing to become part of the adventure and support us in the development of our activity? Don't hesitate anymore and join us!`} />
          <About />
        </section>
        <NewsFeed />
        <Registration />
      </section>
    </section>
  );
}

export default App;
