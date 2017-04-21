import config from "./config";
import template from "./template.html";

import "./style.css";

function resolveRenderOn(){
    this._.todos = [];

    this._.view = {
        inputText: "",
        todos: []
    }
}

function addTodo(todo) {
    this._.todos.push({
        text: todo.text,
        id: Date.now(),
        completed: false
    });
    this._.view.inputText = "";
}

function toggleOne(data) {
    let todo = this._.todos.find((todo)=>{
        return (todo.id === data.id);
    });

    todo.completed = data.value;
}


function changeinputText(input) {
    this._.view.inputText = input.text;
}

export default {
    config,
    addTodo,
    changeinputText,
    toggleOne,
    template,
    resolveRenderOn,
    observe_For: ["render"]
}