import dashboardComposite from "./dashboardComposite";
import dummyModule from "./dummy";

export default [
    {
        name: 'dashboard',
        path: 'dashboard',
        moduleConfig: {
            "moduleName": "dashboardComposite",
            "instanceConfig": {
                "container": "#app-container",
                "placeholders": {

                }
            },
            "module": dashboardComposite
        }
    },
    {
        name: 'dashboard.notifications',
        path: '/notifications',
        moduleConfig: {
            "moduleName": "dummy",
            "instanceConfig": {
                "container": "#app-placeholder",
                "placeholders": {
                    model: {
                        fetchApi: "/get-notifications?pageSize=10&mode=12&actorId=123"
                    }
                }
            },
            "module": dummyModule
        }
    }
]