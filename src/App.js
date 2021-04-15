import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

// const options = [
//     {
//         label: 'The Color Red',
//         value: 'red'
//     },
//     {
//         label: 'The Color Blue',
//         value: 'blue'
//     },
//     {
//         label: 'The Color Green',
//         value: 'green'
//     },
//     {
//         label: 'The Color Orange',
//         value: 'orange'
//     },
//     {
//         label: 'The Color Yellow',
//         value: 'yellow'
//     },
// ];

export default () => {
    // const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Translate />
        </div>
        // <h1><Accordion items={items} /></h1>
        // <h1><Search /></h1>
        // <div>
        //     <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        //     {showDropdown ?
        //         <Dropdown 
        //             selected={selected}
        //             onSelectedChange={setSelected}
        //             options={options}
        //         /> : null
        //     }
        // </div>
    );
}