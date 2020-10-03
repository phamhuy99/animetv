import { Component, OnInit,Input,Output,OnDestroy } from '@angular/core';
import {ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-videotovideo',
  templateUrl: './videotovideo.component.html',
  styleUrls: ['./videotovideo.component.css']
})
export class VideotovideoComponent implements OnInit ,OnDestroy {

  constructor() { }

  ngOnInit(): void {
  	/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  	var sds=document.getElementsByClassName('demo');
  	console.log(sds);
  	console.log(sds[1]);
  	/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  	var xyz=document.getElementsByTagName('h4'); /*return array Object*/
  	console.log(xyz);
  	/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  1 phan tu dau tien*/
  	var zxz=document.querySelector('#aa2');
  	console.log(zxz);
  	/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  	function fgma(){
  		var fxfa=document.querySelectorAll<HTMLElement>("span.addbg > h3") ;
  		console.log( Array.from(fxfa));
  		console.log(fxfa);
  		for (let i = 0; i < fxfa.length; i++) {
  		fxfa[0].style.color = "red"; //<HTMLElement> truy cap set tung the
  		fxfa[0].style.backgroundColor = "blue";
  		fxfa[1].style.color = "blue";
  		fxfa[2].style.color = "green";
  		}
  	}
  	fgma();
  	/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  	var img="assets/image/m1.png";
  	var jkj=document.querySelector<HTMLElement>('.image');
  	console.log(jkj);
  	jkj.setAttribute('src', img );
  	jkj.setAttribute('width', '50');
  	jkj.style.marginTop='50px';
  	/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  	
  	function getattaza() {
  	var ada=document.querySelectorAll<HTMLElement>('p > span');
  	console.log(ada);
  		let temp='';
  		for (let i = 0; i < ada.length; i++) {
  		temp=temp + ada[i].getAttribute('class') + ' ';
  		}
  		console.log(temp);
  		let tem=document.getElementsByClassName('hf4');
  		tem[0].setAttribute('class',temp);
  		console.log(tem);

  	var azx='demo nano abo';
  	var ada1=document.querySelectorAll<HTMLElement>(' p > span');
  	for (var i = 0; i < ada1.length; i++) {
  		ada1[i].setAttribute('class', azx);
  	}
  	
  	console.log(ada1);
  	}	
  	getattaza();
  	/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
  	/*
  	b1 lay class co san trong the;
  	b2 neu ko co class(return null) the setAtribute classNameNew vao;
  	b3 neu co class cu kiem tra xem classNew co trung class cu ko bang indexOf;
  	b4 neu indexOf !== -1 nghia la co class trung roi ko lam gi ca;
  	b5 neu indexOf === -1  thi lay class cu + classNew;
  	b6 set classnew sau khi gep chuoi
  	 */
  	function addClass(el,classNameNew){
  		var oldclass=el.getAttribute('class');
  		if (oldclass) {
  			if (oldclass.indexOf(classNameNew) === -1) {
  				let newclass=oldclass+ " " + classNameNew;
  				console.log(newclass);
  				el.setAttribute('class', newclass);
  				/*kiem tra xem neu class da ton tai ko add nua*/
  			}
  		}else{
  			/*null /false ==> neu chua co san class cu truoc do*/
  			el.setAttribute('class',classNameNew); /*ko co class set class new*/
  		}
  		console.log(oldclass);
  	}
  	let old=document.querySelector('#body1');
  	console.log(old);
  	addClass(old,'abcdef');
  	let h4=document.querySelector('h4');
  	addClass(h4,'adfgh');
  	addClass(h4,'adfgh');
 /* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
 	 var arr:any=['ab','cd','ef','gh','ij','km','gz'];
 	 var arr1:any=arr.join(' ');
 	 console.log(arr1);//array to string ==> join()
 	 var arr2:any=arr1.split(' ');// string to array
 	 console.log( 'arr2:',arr2);
 	 var arr3:any=arr.slice(1,4);// lay 1 array tu 1 array cu: ko thay doi array cu
 	 console.log("arr3:" , arr3);
 	 var arr4:any=arr.splice(1,4);// lay 1 array tu 1 array cu: co thay doi array cu
 	 console.log("arr4:" , arr4); // arr.splice(i,delete,...item)
 	 console.log(arr);
 	 var arr5:any=arr.splice(0,0,'ooa','oob','ooc');
 	 console.log('arr5', arr5);
 	 console.log('arr',arr);
 /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
 	/*
 	b1 lay class tu phan tu can xoa;
 	b2 chuyen phan tu class tu string to array;
 	b3 dung indexOf kiem tra vi tri phan tu xoa trong array;
 	b4 neu ko co phan tu xoa ko lam gi ca; indexOf return -1
 	b6 neu co  tra ve vi tri indexOf tien hanh xoa;
 	b7 dung arr.splice(indexOf,1) de xoa phan tu tai vi tri do;
 	b8 xau khi xoa dung array.join(' ') chuyen thanh string;
 	b9 setAttribute('class', arary.join(''));
 	 */
 	function RemoveClass(el,className){
 		let oldclass=el.getAttribute('class');
 		let oldclassToArray = oldclass.split(' ');
 		let Remove =oldclassToArray.indexOf(className);
 		if (Remove !== -1) {
 			oldclassToArray.splice(Remove,1);
 		}
 		let old1 = oldclassToArray.join(' ');
 		el.setAttribute('class',old1);
 	}
 	RemoveClass(h4,'demo1');
 	/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
 	//ham co san trong JS
 	var demoJs=document.getElementById('hf4');
 	// add() them class
 	console.log(demoJs);
 	demoJs.classList.add('asdf');
 	demoJs.classList.add('class1','class2','class3');
 	// remove() 
 	demoJs.classList.remove('class3');
 	// replace()
 	demoJs.classList.replace('class1','class9');
  //style css
  demoJs.style.backgroundColor='#f00';
/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
var droplist=document.querySelectorAll('.dropdown.drop');
     droplist.forEach(
        function(el,idx){
          var btn=el.querySelector('.btn');
         var rsl= btn.addEventListener("click", function(e){ 
             console.log(el.classList);
             if(el.classList.value.indexOf('open')=== -1){
               el.classList.add('open');
             }else{ el.classList.remove('open');}
             });
            }
          )
     /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
        //parent
       //child
       //sibling
       var qaq=document.querySelector('.ppp');
       let qaq1=qaq.parentElement;
       console.log(qaq);
       console.log(qaq1.querySelector('#test'));
       var chil=document.querySelector('.col-xs-6');
       console.log(chil);
       console.log(chil.firstElementChild);
       console.log(chil.firstElementChild.nextElementSibling);
       let h1=document.querySelector('#test');
       console.log(h1.innerHTML);
       console.log(h1.innerHTML='aasasassasasass');
  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/
     var allselectYear =Array.from( document.querySelectorAll('select[name="year"]'));
     console.log(allselectYear);
     for (var i = 0; i < allselectYear.length; i++) {
       var select=allselectYear[i];
       console.log(allselectYear[i]);
       for ( var year = 1970; year <= 2021; year++) {
         let b=year.toString();
         var option=document.createElement('option');
         option.setAttribute('value',b);
         option.innerText='nam'+ ' '+ year;
         select.append(option);
         console.log(option);
       }
     }
     var cuntry=document.querySelector<HTMLElement>('select[name="cuntry"]');
     cuntry.style.width='40px';
     console.log(cuntry);
     var arrlist:any=['vn','lao','campuchia','china','xingapo','thailan','usa'];
       for (var i = 0; i < arrlist.length; i++) {
         var option1=document.createElement('option');
         option1.setAttribute('value',arrlist[i]);
         option1.innerText=arrlist[i];
         cuntry.append(option1);
         console.log(option1);
       }
          
  }    

/*==========================================================================*/
  ngOnDestroy(){}
/*========================================================================*/
onlick(){
	var abcd=document.getElementById('test');
	console.log(abcd);
	alert('aaaaaaaaaaaaaaa');
  }
/*==========================================================================*/
addbg(val){
 		let ppp1="ppp " + val;
  		document.getElementsByClassName("ppp")[0].setAttribute('class',ppp1);
  		/*dung vong for co the lap nhieu lan*/}
/* =========================================================================*/
}
