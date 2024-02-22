import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength";
import FilterFunction from "./arrays/FilterFunction";
import FindFunction from "./arrays/FindFunction";
import FindIndex from "./arrays/FindIndex";
import ForLoops from "./arrays/ForLoops";
import MapFunctions from "./arrays/MapFunction";
import WorkingWithArrays from "./arrays/WorkingWithArrays";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import SubtractFunstions from "./functions/ArrowFunctions";
import AddFunctions from "./functions/ES5Functions";
import FunctionDestructing from "./functions/FunctionDestructing";
import ParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters";
import MultiplyFunctions from "./functions/ImpliedReturn";
import Destructing from "./json/Destructing";
import House from "./json/House";
import JsonStringify from "./json/JsonStringify";
import Spreading from "./json/Spreading";
import TemplateLiterals from "./string/TemplateLiterals";
import BooleanVariables from "./variables/BooleanVariables";
import VariableTypes from "./variables/VariableTypes";
import VariablesAndConstants from "./variables/VariablesAndConstants";

function JavaScript() {
    console.log('Hello World!');
    return (
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <AddFunctions />
            <SubtractFunstions />
            <MultiplyFunctions />
            <ParenthesisAndParameters />
            <WorkingWithArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunctions />
            <JsonStringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <TemplateLiterals />
            <House />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
        </div>
    );
}

export default JavaScript;