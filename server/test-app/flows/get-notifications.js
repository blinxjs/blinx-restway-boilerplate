/**
 * Created by puran.kanawat on 21/04/17.
 */
module.exports = {
    base: {
        input: {
        }
    },
    nodes: [
        {
            name: 'getNotifications',
            type: "flow",
            config: require("../../common/test-service.js"),
            configContext: {
                apiName: "getNotifications"
            },
            input: {
                qs: "#{$req.query}"
            }
        },
        {
            "name": 'parsedNotifications',
            "type": "object-parser",
            "input": {
                responseData: "#{getNotifications.testService.response}"
            },
            dependencies: ['getNotifications']
        },
        {
            name: 'sendResponse',
            type: 'send-response',
            input: {
                response: "#{parsedNotifications.responseData}",
                headers: {
                    'Content-Type': 'application/json'
                }
            },
            "dependencies": ["parsedNotifications"]
        }
    ]

};