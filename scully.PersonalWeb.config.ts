import { ScullyConfig } from '@scullyio/scully';
const {RouteTypes} = require('@scullyio/scully');
import '@scullyio/scully-plugin-puppeteer'
import {handler, assignIds} from './scully/plugins/assigmentsRouteHandler'
import { getHttp404Plugin } from '@gammastream/scully-plugin-http404';


/** this loads the default render plugin, remove when switching to something else. */
const Http404Plugin = getHttp404Plugin();
console.log(handler)

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "PersonalWeb",

  //spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  defaultPostRenderers: [Http404Plugin],
  routes: {
    "/assigment/:id":{
      type:assignIds,
    
    }
  }

  
};