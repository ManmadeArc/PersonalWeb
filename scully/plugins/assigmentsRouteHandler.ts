import { HandledRoute, registerPlugin, routeSplit } from "@scullyio/scully"


import {assigments} from "../../src/assigments" 


export const assignIds = "assigments"

function assigmentIdPlugin(route: string, config = {}): Promise<HandledRoute[]> {

    const {createPath} = routeSplit(route)
    const handledRoutes = [];
    const childs = assigments.links[0].childs
    for(let item of childs){
        handledRoutes.push({
            route:createPath(item.Title)
        })
    }
    

  return Promise.resolve(handledRoutes);
}

const validator = async (conf) => [];
registerPlugin('router', assignIds, assigmentIdPlugin);

export const  handler =assigmentIdPlugin


