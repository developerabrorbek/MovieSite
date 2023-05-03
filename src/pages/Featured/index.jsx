import React from 'react';
import Featured from '../../components/Featured';

const FeaturedPage = () => {
    return (
        <main className='pt-24'>
            <Featured cards={20} page={2} pagination={true}/>
            
        </main>
    );
};

export default FeaturedPage;