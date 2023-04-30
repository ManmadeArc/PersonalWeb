import { AgmMap } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { assigments } from 'src/assigments';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';

// import { ViewportScroller } from "@angular/common";



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit,AfterViewInit {

  title = "Upss Theres No Assigment"
  pdflink = "None"
  data:any
  json:any
  constructor(private route: ActivatedRoute,  private router:Router, private http: HttpClient){}//,private scroller: ViewportScroller) { }

  @ViewChild('geomap',{static:false}) public map!: GoogleMapsComponent;

  async ngOnInit(): Promise<void> {

    //@ts-ignore
      if(this.route.url['_value'][0]['path']=="exam"){


        this.route.params.subscribe(async (params) => {
          let work = params['id'] ??null
          let info =assigments.links.filter(x=>x.title=="Examen Final" && x.childs.length>0).map(x=>x.childs)[0].filter(x=>x['resource-id']==work)
          let exists = info.length>0 
          if(!exists) this.router.navigateByUrl("/404")
    
          this.pdflink = info[0]['pdf-route']
          this.title = info[0]['title'] 
          this.data=info[0]['data'] ??null
          await this.loadJsons()
          
          console.log(this.data)
    
        })

        return
      }
     this.route.params.subscribe(async (params) => {
      let work = params['id'] ??null
      let info =assigments.links.filter(x=>x.title=="Asignaciones" && x.childs.length>0).map(x=>x.childs)[0].filter(x=>x['resource-id']==work)
      let exists = info.length>0 
      if(!exists) this.router.navigateByUrl("/404")

      this.pdflink = info[0]['pdf-route']
      this.title = info[0]['title'] 
      this.data=info[0]['data'] ??null
      await this.loadJsons()
      
      console.log(this.data)

    })
    
    
    
  }

 ngAfterViewInit(): void {
     
 }

 scrollDown(id:number | string):void{

let doc = id.toString() ?? ""
  document.getElementById(doc)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
 }

 async loadJsons():Promise<void>{

  for (let topic of this.data.sections){
    if(Object.keys(topic).length>0)
    for( let par of topic.content ){
      if(par.type=="json"){
        par.obj = await this.getJson(par.value)
      }
    }
  }

 }

 async getJson(assets:string):Promise<any>{


  let data = await lastValueFrom( this.http.get(assets))
  console.log(data)
  return data
 }



}
