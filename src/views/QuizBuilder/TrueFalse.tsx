import React, { useState } from 'react';
import Input from '../../components/inputs/Input';

export default function TrueFalse() {
    const [value, setValue] = useState<boolean>(true); // Specify the boolean type for the state

    return (
        <div>
            <span className='p2'>Question Statement:</span>
            <Input customStyles={{ height: '88px' }} />
            <div className='d-flex align-center gap-10'>
                <h4>Set As</h4>
                <button
                    style={{ margin: "0px", width: "56px" }}
                    onClick={() => { setValue(true) }}
                    className={`select-button ${value ? 'selected-select-button' : ''}`}>
                    <h4>True</h4>
                </button>
                <button
                    style={{ margin: "0px", width: "56px" }}
                    onClick={() => { setValue(false) }}
                    className={`select-button ${!value ? 'selected-select-button' : ''}`}>
                    <h4>False</h4>
                </button>
            </div>
        </div>
    );
}
