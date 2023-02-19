import { Component, OnInit } from '@angular/core';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public sanitizer:DomSanitizer) { }


  playlists =[
    "https://open.spotify.com/embed/playlist/0GabfeKInegF9zVm3ot23V?utm_source=generator",
    "https://open.spotify.com/embed/playlist/4veJem42D52fAtiQ1ghtcg?utm_source=generator",
    "https://open.spotify.com/embed/playlist/1BeQZaFgLCpxPfLEFaw76k?utm_source=generator",
    "https://open.spotify.com/embed/playlist/6MfVRZkz1u4VFOrahEVBqf?utm_source=generator",
    "https://open.spotify.com/embed/playlist/1yrDHI1OMXf2mtqgMnrauI?utm_source=generator",
    "https://open.spotify.com/embed/playlist/0tGFRfIxoQw7hS6gNYx7TD?utm_source=generator",
  ]



  index= Math.floor(Math.random() * 10) % this.playlists.length

  next(){
    this.index  = Math.abs((this.index + 1) % this.playlists.length)
  }

  previous(){
    this.index  = Math.abs(((this.index - 1) < 0 ? this.playlists.length-1 : this.index -1) % this.playlists.length)
  }
  ngOnInit(): void {
   
  }

}
