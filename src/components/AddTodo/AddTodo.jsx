import React, { useState } from 'react';
import { Button, Input } from 'antd';

const AddTodo = ({todo ,setTodo}) => {
    const [value, setValue] = useState("");
    function addTodo(){
        setTodo(
            [...todo, {
                id: todo.length + 1,
                title: value
            }]
        )
        setValue('');
    }
    return (
        <div>
            <Input style={{width: "400px"}} placeholder="Enter your text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <Button type='primary' onClick={addTodo}>Add</Button>
        </div>
    );
};

export default AddTodo;