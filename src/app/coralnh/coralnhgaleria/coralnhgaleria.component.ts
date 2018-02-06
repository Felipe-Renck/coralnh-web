import { Component, OnInit } from '@angular/core';
import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-coralnhgaleria',
  templateUrl: './coralnhgaleria.component.html',
  styleUrls: ['./coralnhgaleria.component.css']
})
export class CoralnhgaleriaComponent implements OnInit {

  imagesArray: Array<Image> = [
    new Image('../assets/images/coralnh/galeria/DSC05166.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05074.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05082.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05087.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05106.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05111.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05120.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05125.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05142.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05143.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05144.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05145.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05146.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05149.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05150.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05157.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05158.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05161.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05162.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05163.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05081.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05167.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05173.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05176.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05180.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05183.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05187.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05194.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05199.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05212.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05215.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05217.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05218.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05228.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05247.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05255.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05258.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05274.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05276.jpg',null, null,null),
    new Image('../assets/images/coralnh/galeria/DSC05282.jpg',null, null,null)    
  ];

  openModalWindow: boolean = false;
  imagePointer: number = 0;

  openModalWindowObservable: boolean = false;
  imagePointerObservable: number = 0;

  private subscription: Subscription;
  private imagesArraySubscription: Subscription;

  imagesArraySubscribed: Array<Image>;

  constructor() { }

  ngOnInit() {
    this.imagesArraySubscription = Observable.of(null).delay(500).subscribe(() => {
      this.imagesArraySubscribed = this.imagesArray;
    });
  }
}
