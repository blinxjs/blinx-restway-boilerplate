import config from "./config";

import template from "./template.html";
import "./style.css";


function resolveRenderOn() {
    this._.count = 0;
}

function changeCounter(op){
    switch(op.type) {
        case "+":
            ++this._.count;
            break;
        case "-":
            --this._.count;
            break;
    }
}

export default {
    config,
    template,
    resolveRenderOn,
    changeCounter,
    observe_For: ["render"]
}