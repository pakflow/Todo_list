import React, { useState } from 'react';
import { Button, Input } from 'antd';

const AddTodo = ({todo ,setTodo}) => {
    const [value, setValue] = useState("");
    // function addTodo(){
    //     setTodo(
    //         [...todo], 
    //     )
    // }
    return (
        <div>
            <Input placeholder="Enter your text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button type='primary' >Add</Button>
        </div>
    );
};

export default AddTodo;