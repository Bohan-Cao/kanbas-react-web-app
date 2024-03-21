import React from 'react';
import ReduxExamples from './ReduxExamples';
import ClickEvent from './ClickEvent';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from './PassingFunctions';
import EventObject from './EventObject';
import Counter from './Counter';
import BooleanStateVariables from './BooleanStateVariables';
import StringStateVariables from './StringStateVariables';
import DateStateVariable from './DateStateVariable';
import ObjectStateVariable from './ObjectStateVariable';
import ArrayStateVariable from './ArrayStateVariable';
import ParentStateComponent from './ParentStateComponent';
import TodoList from './ReduxExamples/todos/TodoList';

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return (
        <>
            <h1>Labs</h1>
            <h1>Assignment 4</h1><br />
            <ReduxExamples /><br />
            <ClickEvent /><br />
            <PassingDataOnEvent /><br />
            <PassingFunctions theFunction={sayHello} /><br />
            <EventObject /><br />
            <Counter /><br />
            <BooleanStateVariables /><br />
            <StringStateVariables /><br />
            <DateStateVariable /><br />
            <ObjectStateVariable /><br />
            <ArrayStateVariable /><br />
            <ParentStateComponent /><br />
        </>
    );
};

export default Assignment4;