import React from 'react'
import ReactDOM from 'react-dom'
import Student from './Student'
import Example from './Example'

let students = [
    { name: 'Adhonys', gender: 'm', score: 76 },
    { name: 'Kandora', gender: 'f', score: 78 },
    { name: 'George', gender: 'm', score: 80 },
    { name: 'Naxiell', gender: 'f', score: 82 },
    { name: 'Daniel', gender: 'm', score: 84 },
    { name: 'Manuel', gender: 'm', score: 86 },
    { name: 'Carlos', gender: 'm', score: 88 },
    { name: 'Cesar', gender: 'm', score: 90 },
    { name: 'Ean', gender: 'm', score: 92 },
    { name: 'Jose', gender: 'm', score: 94 },
    { name: 'Leandro', gender: 'm', score: 96 },
    { name: 'Wilber', gender: 'm', score: 98 },
    { name: 'Milton', gender: 'm', score: 100 }];

const milton = students[12];

const App = () => {
    return <div>
        <h2 className='student-header'>Alterna Student List</h2>
        <Student name='Adhonys' gender='m' score='76' photo='https://github.com/madleak.png' />
        <Student name='Kandora' gender='f' score='78' />
        <Student name='George' gender='m' score='80' />
        <Student name='Naxiell' gender='f' score='82' />

        {/* useState Example */}
        <Example />
    </div>
};

ReactDOM.render(<App />, document.getElementById("root"));