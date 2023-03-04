"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assigments = void 0;
const assign4_1 = require("./homeworks/assign4");
const assign_1_1 = require("./homeworks/assign_1");
const assign_2_1 = require("./homeworks/assign_2");
const assign_3_1 = require("./homeworks/assign_3");
const assign5_1 = require("./homeworks/assign5");
exports.assigments = {
    "links": [
        {
            "type": "single",
            "title": "Pagina Principal",
            "link": "/",
            "childs": []
        },
        {
            "type": "multiple",
            "title": "Asignaciones",
            "link": "/assigment/",
            "childs": [
                {
                    "title": "Asignación 1",
                    "resource-id": "1",
                    "pdf-route": "/assets/pdf/assign_1.pdf",
                    "data": { ...assign_1_1.assign1 }
                }, {
                    "title": "Asignación 2",
                    "resource-id": "2",
                    "pdf-route": "/assets/pdf/assign_2.pdf",
                    "data": { ...assign_2_1.assign2 }
                },
                {
                    "title": "Asignación 3",
                    "resource-id": "3",
                    "pdf-route": "/assets/pdf/assign_3.pdf",
                    "data": { ...assign_3_1.assign3 }
                },
                {
                    "title": "Asignación 4",
                    "resource-id": "4",
                    "pdf-route": "/assets/pdf/assign_4.pdf",
                    "data": { ...assign4_1.assign4 }
                },
                {
                    "title": "Asignación 5",
                    "resource-id": "5",
                    "pdf-route": "/assets/pdf/assign_4.pdf",
                    "data": { ...assign5_1.assign5 }
                },
            ]
        },
        {
            "type": "single",
            "title": "Acerca de mi",
            "link": "/about",
            "childs": []
        },
    ]
};
//# sourceMappingURL=assigments.js.map