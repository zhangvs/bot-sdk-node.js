/**
 * @file salary槽位填充
 * @author yelvye@baidu.com
 */

let data = {
    version: 'v2.0',
    session: {
        new: false,
        sessionId: '2ba77976-2206-47de-9c87-9842f6fc35ec',
        attributes: []
    },
    context: {
        System: {
            user: {
                userId: '145771863',
                userInfo: {
                    account: []
                }
            },
            application: {
                applicationId: 'faaded36-7884-5186-76f0-3129bf82ac0b'
            },
            device: {
                deviceId: '49d0ab4d1f13b4530fae3a7f02107cd5',
                supportedInterfaces: {
                    VoiceInput: [],
                    VoiceOutput: [],
                    AudioPlayer: []
                }
            },
            apiAccessToken: '',
            apiEndPoint: 'https://xiaodu.baidu.com'
        }
    },
    request: {
        query: {
            type: 'TEXT',
            original: 'yes'
        },
        dialogState: 'IN_PROGRESS',
        intents: [
            {
                name: 'inquiry_tax',
                slots: {
                    salary: {
                        name: 'salary',
                        value: '1234',
                        values: [
                            '1234'
                        ],
                        confirmationStatus: 'CONFIRMED'
                    }
                }
            }
        ],
        type: 'IntentRequest',
        requestId: '573f5833d01a4380bbaa1819716cb088_0',
        timestamp: '1528969624',
        dialogRequestId: '69acdea0-d671-45a2-849a-eb22284b7456'
    }
};

console.log(JSON.stringify(data));
