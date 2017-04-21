import todosComposite from "./todosComposite";

export default [
    {
        name: 'dashboard.todos',
        path: '/todos',
        moduleConfig: {
            "moduleName": "todosComposite",
            "instanceConfig": {
                "container": "#app-placeholder",
                "placeholders": {

                }
            },
            "module": todosComposite
        }
    }
]