/**
 * Created by puran.kanawat on 21/04/17.
 */
module.exports = [
    {
        path: "/get-notifications",
        method: "GET",
        flow: {
            name: "getNotifications",
            config: require("./flows/get-notifications.js")
        }
    }
];