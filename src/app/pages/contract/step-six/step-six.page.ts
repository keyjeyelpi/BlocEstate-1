import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-step-six',
  templateUrl: './step-six.page.html',
  styleUrls: ['./step-six.page.scss'],
})
export class StepSixPage implements OnInit {

  photos: any = []

  constructor( public camera: Camera, public file: File ) { }

  ngOnInit() {
  }

  takePhotos() {
    var options:CameraOptions = {
      quality: 100,
      mediaType: this.camera.MediaType.PICTURE,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG
    }

    this.camera.getPicture().then(( imagedata ) => {
      let filename = imagedata.substring(imagedata.lastIndexOf('/')+1),
      path = imagedata.substring( 0, imagedata.lastIndexOf('/')+1)

      this.file.readAsDataURL( path, filename ).then((base64data)=>{
        this.photos.push(base64data)
      })
    })
  }

}
