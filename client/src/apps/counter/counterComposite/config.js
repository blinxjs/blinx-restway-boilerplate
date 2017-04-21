export default {
    modules: [],
    placeholders: {

    },
    enableSmartRender: true,
    domEvents: {
        "click": [{
            selectors: [".counter-changer"],
            callback: "changeCounter",
            extract: {
                type: "getData#type"
            }
        }]
    }
}