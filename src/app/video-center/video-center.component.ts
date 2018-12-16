import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos:Video[];

   selectedVideo:Video;
  constructor(private _videoService:VideoService) { }

  ngOnInit() {
  this._videoService.getVideos()
  .subscribe(resVideoData => this.videos = resVideoData)

}

  onSelectVideo(vid:any) {
   this.selectedVideo = vid;
   console.log(this.selectedVideo);
  }

}