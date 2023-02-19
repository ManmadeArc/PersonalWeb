"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assigments = void 0;
const assign_1_1 = require("./homeworks/assign_1");
const assign_2_1 = require("./homeworks/assign_2");
const assign_3_1 = require("./homeworks/assign_3");
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
                }
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