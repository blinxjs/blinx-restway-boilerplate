import counterComposite from "./counterComposite";

export default [
    {
        name: 'dashboard.counter',
        path: '/counter',
        moduleConfig: {
            "moduleName": "counterComposite",
            "instanceConfig": {
                "container": "#app-placeholder",
                "placeholders": {
                }
            },
            "module": counterComposite
        }
    }
]