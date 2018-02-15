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

  imagesArray_Gramado_2017: Array<Image> = [
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05166.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05166_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05074.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05074_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05082.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05082_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05087.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05087_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05106.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05106_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05111.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05111_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05120.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05120_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05125.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05125_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05142.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05142_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05143.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05143_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05144.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05144_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05145.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05145_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05146.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05146_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05149.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05149_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05150.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05150_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05157.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05157_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05158.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05158_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05161.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05161_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05162.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05162_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05163.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05163_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05081.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05081_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05167.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05167_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05173.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05173_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05176.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05176_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05180.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05180_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05183.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05183_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05187.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05187_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05194.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05194_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05199.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05199_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05212.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05212_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05215.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05215_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05217.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05217_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05218.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05218_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05228.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05228_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05247.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05247_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05255.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05255_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05258.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05258_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05274.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05274_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05276.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05276_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/gramado_2017/DSC05282.jpg','../assets/images/coralnh/galeria/gramado_2017/thumbnails/DSC05282_tn.jpg', null,null)    
  ];

  imagesArray_Fenadoce_2017: Array<Image> = [
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02411.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02411_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02421.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02421_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02430.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02430_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02478.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02478_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02480.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02480_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02487.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02487_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02491.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02491_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02515.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02515_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02519.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02519_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02526.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02526_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02546.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02546_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02553.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02553_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02589.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02589_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02603.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02603_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02611.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02611_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02645.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02645_tn.jpg', null,null),
    new Image('../assets/images/coralnh/galeria/fenadoce_2017/DSC02650.jpg','../assets/images/coralnh/galeria/fenadoce_2017/thumbnails/DSC02650_tn.jpg', null,null)
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
      this.imagesArraySubscribed = this.imagesArray_Gramado_2017;
    });
  }
}
