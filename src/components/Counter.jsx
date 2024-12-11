import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    
    return (
        <>
            <div className="Counter"></div>

            <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
}
export default Counter;