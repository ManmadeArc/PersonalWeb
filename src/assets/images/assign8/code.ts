   //@ts-ignore
 class GoogleMapsComponent implements OnInit {
  //@ts-ignore
  constructor( private http:HttpClient) { }
  
  //@ts-ignore
  markers:coordinates[] =[]
  //Coordenadas de Tj
  lat = 32.522499;
  lng = -116.94193373232736;
  loaded = false

  async ngOnInit(): Promise<void> {
  
    // Obtenemos una respuesta de nuestra api
      //@ts-ignore
    let response:any = await lastValueFrom (this.http.get('https://009kah5l7l.execute-api.us-east-1.amazonaws.com/dev/locations'))
    // Obtenemos los puntos
    this.markers =  response['points']
    // Marcamos el prcesamiento como terminado.
    this.loaded=true

  }
}