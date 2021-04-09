import React from 'react';
import Accordion from './components/Accordion';

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
        <h1><Accordion items={items} /></h1>
    );
}