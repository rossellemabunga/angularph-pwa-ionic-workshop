import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-mentorship-request',
  templateUrl: './mentorship-request.page.html',
  styleUrls: ['./mentorship-request.page.scss'],
})
export class MentorshipRequestPage implements OnInit {
  public selfie = null;

  constructor() { }

  ngOnInit() { }

  async openCamera() {
    const image = await Camera.getPhoto({
      quality: 30,
      width: 500,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });

    this.selfie = "data:image/jpeg;base64," + image['base64String'];
  }

}
