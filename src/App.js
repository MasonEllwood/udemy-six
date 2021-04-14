import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// accordian model
// const items = [
//     {
//         title: 'What is react?',
//         content: 'React is mad lame and kinda sucks'
//     },
//     {
//         title: 'Why react?',
//         content: 'because boss doesnt like Flutter'
//     },
//     {
//         title: 'Some react?',
//         content: 'React AKA lame city'
//     }
// ];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Orange',
        value: 'orange'
    },
    {
        label: 'The Color Yellow',
        value: 'yellow'
    },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        // <h1><Accordion items={items} /></h1>
        // <h1><Search /></h1>
        <Dropdown 
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
        />
    );
}