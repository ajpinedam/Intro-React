import React, { useState } from 'react';

Example = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    console.log(count);

    return <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 3)}>Update Count</button>
    </div>
}

export default Example;