import { assign4 } from "./homeworks/assign4"
import { assign1 } from "./homeworks/assign_1"
import { assign2 } from "./homeworks/assign_2"
import { assign3 } from "./homeworks/assign_3"
import { assign5 } from "./homeworks/assign5"
import { assign6 } from "./homeworks/assign6"
import { assign8 } from "./homeworks/assign8"
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
                },
                {
                    "title": "Asignación 4",
                    "resource-id": "4",
                    "pdf-route": "/assets/pdf/assign_4.pdf",
                    "data":{...assign4}
                },
                {
                    "title": "Asignación 5",
                    "resource-id": "5",
                    "pdf-route": "/assets/pdf/assign_5.pdf",
                    "data":{...assign5}
                },
                {
                    "title": "Asignación 6",
                    "resource-id": "6",
                    "pdf-route": "/assets/pdf/assign_6.pdf",
                    "data":{...assign6} 
                },
                {
                    "title": "Asignación 8",
                    "resource-id": "8",
                    "pdf-route": "/assets/pdf/assign_8.pdf",
                    "data":{...assign8} 
                },
                
                
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
