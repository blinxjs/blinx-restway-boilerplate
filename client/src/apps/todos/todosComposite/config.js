export default {
    enableSmartRender: true,
    domEvents: {
        "change": [{
            selectors: [".toggle"],
            data: ["id"],
            callback: "toggleOne",
            extract: {
                value: "is#:checked",
                id: "getData#id"
            }
        }],
        "keyup": [{
            selectors: [".new-todo"],
            callback: "changeinputText",
            extract: {
                text: "val"
            }
        },{
            selectors: [".new-todo"],
            which: [13],
            callback: "addTodo",
            extract: {
                text: "val",
                event: "event"
            }
        },{
            selectors: [".old-todo"],
            callback: "changeinputText",
            extract: {
                text: "val"
            }
        },{
            selectors: [".old-todo"],
            which: [13],
            callback: "addTodo",
            extract: {
                text: "val",
                event: "event"
            }
        }]
    }
};