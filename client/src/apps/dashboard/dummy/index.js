import template from "./template.html";
import config from "./config";
import Model from "common_entensions/model"

import "./style.css";

function resolveRenderOn() {
    var self = this;
    this.notificationModel = new Model(this.modulePlaceholders.model);
    this.notificationModel.fetch()
        .then(function(res){
            self._.viewData = self.modulePlaceholders = res;
        },
        function(){

        });
    //this._.viewData = this.modulePlaceholders;
}

export default {
    config,
    resolveRenderOn,
    template,
    observe_For: ["render"]
}