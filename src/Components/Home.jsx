import React from 'react';
import Banner from './Banner';
import Books from './Books';

const Home = (props) => {
    return (
       <div>
        <Banner></Banner>
        <Books></Books>
       </div>
    );
};

export default Home;