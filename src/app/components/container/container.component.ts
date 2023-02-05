import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { assigments } from 'src/assigments';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit,AfterViewInit {

  title = "Upss Theres No Assigment"
  pdflink = "None"
  constructor(private route: ActivatedRoute,  private router:Router) { }


  async ngOnInit(): Promise<void> {
     this.route.params.subscribe(async (params) => {
      let work = params['id'] ??null
      let info =assigments.links.filter(x=>x.title=="Asignaciones" && x.childs.length>0).map(x=>x.childs)[0].filter(x=>x['resource-id']==work)
      let exists = info.length>0
      
      if(!exists) this.router.navigateByUrl("/404")
      this.pdflink = info[0]['pdf-route']
      console.log(work)
      this.title = work
    })
    
    
    
  }

 ngAfterViewInit(): void {
     
 }



}
