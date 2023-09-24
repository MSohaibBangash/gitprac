import React from 'react'

function ArrayPrac() {
    const fruits = ["Apple", "Banana", "Mango", "lemon"]
    // Push:add items at the end end of array
    fruits.push("orange", "pineapple")
    // Pop: last item remove karta hai
    fruits.pop()
    // Shift: remove first item  
    const res1 = fruits.shift();
    // Unshift : add items at the beginning of array
    const res2 = fruits.unshift("kiwi", "grapes")


    // Concat:add two array and make them single
    const moreFruits = ["kadoo", "karalay"]
    const res3 = fruits.concat(moreFruits)

    // slice: issuers the items of array
    const res4 = fruits.slice(1, 3);

    // splice:removing ,adding and replacing the item of array  
    const fruits1 = ["apple", "banana","mango","date", "lemon"];
    const res5 = fruits1.splice(2, 1, "blueberry");
    
    // filter:filter items from from arrays
    const fruits2 = ["apple", "banana","mango","date", "lemon"];
    const res6 = fruits2.filter((item)=>{
     return item.includes("a")  
    });   

    // filter:filter items from from arrays
    const fruits3 = ["apple", "banana","mango","date", "lemon"];
    const res7 = fruits3.find((item)=>{
     return item.includes("a")  
    });   

    
    
    return (
        <>
            <p>{fruits.length}</p>
            {
                fruits.map((items, i) => {
                    return <p key={i}>{i + 1}.{items}</p>
                })
            }
            {res1}
            {res2}<br></br>
            <h1>Concat 2 Arrays</h1>
            {
                res3.map((items, i) => {
                    return <p key={i}>{i + 1}.{items}</p>
                })}
            <h3>Slice</h3>
            {
                res4.map((items, i) => {
                    return <p key={i}>{i + 1}.{items}</p>
                })}

            <h3>Splice</h3>
            {
                res5.map((items, i) => {
                    return <p key={i}>{i + 1}.{items}</p>
                })}
            <h3>filter</h3>
            {
                res6.map((item, i )=>{
                    return <p key={i}>{i + 1}.{item}</p>
                })
            }
            <h3>find</h3>
            {res7}

            

        </>
    )
}

export default ArrayPrac
