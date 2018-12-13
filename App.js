import React from 'react';
import { TextInput } from 'react-native';

const InputPadrao = (props) => {
    return (
        <TextInput
            {...props} //spread operator
            style={{ color: 'red', width: '80%'}}
            placeholder={props.placeholderText}
            onChangeText={props.onChangeText} 
            value={props.value}
        />
    );
};

export { InputPadrao };
