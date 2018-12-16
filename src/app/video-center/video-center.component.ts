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
private hiddenNewVideo:boolean = true;
   selectedVideo:Video;

  constructor(private _videoService:VideoService) { }

  ngOnInit() {
  this._videoService.getVideos()
  .subscribe(resVideoData => this.videos = resVideoData)

}

  onSelectVideo(vid:any) {
   this.selectedVideo = vid;
   this.hiddenNewVideo = true;
   console.log(this.selectedVideo);
  }

  onSubmitAddVideo(video:Video) {
    this._videoService.addVideo(video)
    .subscribe(resNewVideo => {
      this.videos.push(resNewVideo);
      this.selectedVideo = resNewVideo;
    })
    this.hiddenNewVideo = true;

  }

  newVideo() {
    this.hiddenNewVideo = false;
  }
}
