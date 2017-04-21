/**
 * Created by puran.kanawat on 21/04/17.
 */
module.exports = {
    base: {
        input: {
            utils: {}
        },
        configContext: {
            apis: {
                getNotifications: {
                    method: 'GET',
                    uri: '/notifications',
                    json: true,
                    qs: "#{qs}",
                    schema: {
                        input: {
                            type: "object",
                            properties: {
                                qs: {
                                    type: "object",
                                    properties: {
                                        pageSize: {
                                            type: "string"
                                        },
                                        mode: {
                                            type: "string"
                                        },
                                        actorId: {
                                            type: "string"
                                        }
                                    },
                                    required: ["pageSize", "mode", "actorId"]
                                }
                            }
                        },
                        output: {
                            type: "object",
                            properties: {
                                response: {
                                    type: "object",
                                    properties: {
                                        count: {
                                            type: "number"
                                        },
                                        notifications: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    requestJson: {
                                                        type: "object",
                                                        properties: {
                                                            notificationFragment: {
                                                                type: "string"
                                                            },
                                                            title: {
                                                                type: "string"
                                                            }
                                                        },
                                                        required: ["notificationFragment", "title"]
                                                    },
                                                    notificationDetailId: {
                                                        type: "number"
                                                    },
                                                    startDate: {
                                                        type: "string"
                                                    }
                                                },
                                                required: ["requestJson", "notificationDetailId", "startDate"]
                                            }
                                        }
                                    },
                                    required: ["notifications", "count"]
                                }
                            },
                            required: ["response"]

                        }

                    },
                    onError: {

                        validation: {
                            input: {
                                terminate: true,
                                statusCode: 400,
                                error: {
                                    message: "Invalid input.",
                                    details: "#{sellerComBackend.$inputError}"
                                }
                            },
                            output: {
                                terminate: true,
                                statusCode: 500,
                                error: {
                                    message: "Invalid response from sellerComBackend Backend.",
                                    details: "#{sellerComBackend.$outputError}"
                                }
                            }
                        },
                        entity: {
                            terminate: true,
                            status: 500,
                            error: {
                                message: "Failed to fetch Notifications."
                            }
                        }

                    },
                    identifier: "GET_NOTIFICATIONS"
                }
            }
        }
    },
    nodes: [
        {
            name: "testService",
            type: 'request',
            config: {
                identifier: "@{apis[apiName].identifier}",
                hystrix: {
                    timeout: 1500
                }
            },
            input: {
                uri: '@{$config.testService.baseUrl}@{apis[apiName].uri}',
                method: '@{apis[apiName].method}',
                body: '@{apis[apiName].body}',
                qs: '@{apis[apiName].qs}',
                json: '@{apis[apiName].json}',
                headers: '@{apis[apiName].headers}'
            },
            schema: "@{apis[apiName].schema}",
            onError: "@{apis[apiName].onError}"
        }
    ]
};