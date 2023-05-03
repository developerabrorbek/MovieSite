import React from 'react';
import Arrival from '../../components/Arrival';

const ArrivalPage = () => {
    return (
        <main className='pt-24'>
        <Arrival cards={20} page={9} pagination={true}/>
        </main>
    );
};

export default ArrivalPage;