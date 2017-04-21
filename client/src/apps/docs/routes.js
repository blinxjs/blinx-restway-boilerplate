import docsComposite from "./docsComposite";

export default [
    {
        name: 'dashboard.docs',
        path: '/docs',
        moduleConfig: {
            "moduleName": "docsComposite",
            "instanceConfig": {
                "container": "#app-placeholder",
                "placeholders": {
                }
            },
            "module": docsComposite
        }
    }
]