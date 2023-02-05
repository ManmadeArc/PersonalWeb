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
                    "pdf-route": "/assets/pdf/assign_1.pdf"
                }, {
                    "title": "Asignación 2",
                    "resource-id": "2",
                    "pdf-route": "/assets/pdf/assign_2.pdf"
                }
            ]
        },

    ]

}
