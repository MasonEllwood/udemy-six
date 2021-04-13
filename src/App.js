import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is react?',
        content: 'React is mad lame and kinda sucks'
    },
    {
        title: 'Why react?',
        content: 'because boss doesnt like Flutter'
    },
    {
        title: 'Some react?',
        content: 'React AKA lame city'
    }
];

export default () => {
    return (
        // <h1><Accordion items={items} /></h1>
        // <h1><Search /></h1>
        <h1><Dropdown /></h1>
    );
}