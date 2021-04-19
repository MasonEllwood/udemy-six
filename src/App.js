import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

// accordian model
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
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}    
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}