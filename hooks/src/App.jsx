import {React, useCallback, useMemo, useState} from "react";

const App = () => {

// ---------------------------- useState ----------------------------

    const [binary, setBinary] = useState(0);
    
    const changeBinary = () => {
        setBinary(prev => prev ? 0 : 1);
    }
    
    
// ---------------------------- useMemo ----------------------------
    const [age, setAge] = useState(19);

    // const myAge = useMemo(() => age, [binary]);
    const myAge = useMemo(() => age, [age]);

    const changeAge = () => {
        setAge(age+1);
    }


// ---------------------------- useCallback ----------------------------

    const [num, setNum] = useState(1);

    const changeNum = useCallback(() => {
        // const numberInput = document.getElementById("callbackTeste").value;
        // const newNumber = numberInput * 10;
        console.log(num)
        
        setNum(num+1);
    }, [num])

    return (
        <>
            <div>
                <p>{binary}</p>

                <button onClick={changeBinary}>Change</button>
            </div>
            <div>
                <p>{myAge}</p>

                <button onClick={changeAge}>Change</button>
            </div>
            <div>
                {/* <input id="callbackTeste" type="number" defaultValue={num}/> */}
                <p>{num}</p>

                <button onClick={changeNum}>Change</button>
            </div>
        </>
    );
}

export default App;
