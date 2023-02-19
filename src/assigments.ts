import { assign1 } from "./homeworks/assign_1"
import { assign2 } from "./homeworks/assign_2"
import { assign3 } from "./homeworks/assign_3"

export let assigments = {

    "links": [

        {
            "type":"single",
            "title":"Pagina Principal",
            "link":"/",
            "childs":[]

        },
        {
            "type":"multiple",
            "title": "Asignaciones",
            "link":"/assigment/",
            "childs": [
                {
                    "title": "Asignación 1",
                    "resource-id": "1",
                    "pdf-route": "/assets/pdf/assign_1.pdf",
                    "data":{...assign1}
                }, {
                    "title": "Asignación 2",
                    "resource-id": "2",
                    "pdf-route": "/assets/pdf/assign_2.pdf",
                    "data":{...assign2}
                },

                {
                    "title": "Asignación 3",
                    "resource-id": "3",
                    "pdf-route": "/assets/pdf/assign_3.pdf",
                    "data":{...assign3}
                }
            ]
        },
        {
            "type":"single",
            "title":"Acerca de mi",
            "link":"/about",
            "childs":[]

        },

    ]

}
