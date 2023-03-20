import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AgmMap } from '@agm/core';

interface coordinates{
  x:number,
  y:number,
  matricula:string,
  datetime:string
}
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit, AfterViewInit {

  constructor( private http:HttpClient) { }
  @ViewChild('map',{static:false}) public agmMap!: AgmMap ;
  markers:coordinates[] =[]
  lat = 32.522499;
  lng = -116.94193373232736;
  loaded = false

  async ngOnInit(): Promise<void> {
    console.log("INIT")
    // Obtenemos una respuesta de nuestra api
    let response:any = await lastValueFrom (this.http.get('https://009kah5l7l.execute-api.us-east-1.amazonaws.com/dev/locations'))
    // Obtenemos los puntos
    this.markers =  response['points']
    // Marcamos el prcesamiento como terminado.
    this.loaded=true

  }

  ngAfterViewInit(): void {
   
      setTimeout(() => {
        console.log(this.agmMap)
        console.log('Resizing');
        this.agmMap.triggerResize();
      }, 1000);
    
  }

  async reloadData(): Promise<void>{
    this.loaded=false
    // Obtenemos una respuesta de nuestra api
    let response:any = await lastValueFrom (this.http.get('https://009kah5l7l.execute-api.us-east-1.amazonaws.com/dev/locations'))
    // Obtenemos los puntos
    this.markers =  response['points']
    // Marcamos el prcesamiento como terminado.
    this.loaded=true
  }





  generateLocation(latitude:number, longitude:number, max:number, min:number = 0):any {
    if (min > max) {
      throw new Error(`min(${min}) cannot be greater than max(${max})`);
    }
  
    // earth radius in km
    const EARTH_RADIUS = 6371;
  
     // 1° latitude in meters
    const DEGREE = EARTH_RADIUS * 2 * Math.PI / 360 * 1000;
  
    // random distance within [min-max] in km in a non-uniform way
    const maxKm = max * 1000;
    const minKm = min * 1000;
    const r = ((maxKm - minKm + 1) * Math.random() ** 0.5) + minKm;
  
    // random angle
    const theta = Math.random() * 2 * Math.PI;
    const theta2 = Math.random() * 2 * Math.PI;
  
    const dy = r * Math.sin(theta);
    const dx = r * Math.cos(theta2);
  
    let newLatitude = latitude + dy / DEGREE;
    let newLongitude = longitude + dx / (DEGREE * Math.cos(deg2rad(latitude)));
  
    newLatitude = Math.min(newLatitude,32.53697134107376- Math.random()/100) 
  
  
    return {
      newLatitude,
      newLongitude,
    };
  }
}
function deg2rad(degrees:number): number {
  var pi = Math.PI;
  return degrees * (pi/180);
}

