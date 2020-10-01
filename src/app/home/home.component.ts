import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // example for property binding
raffi="https://cdn.pixabay.com/photo/2019/12/13/06/18/nature-4692278__480.jpg";
// example end
//class binding  and style binding
color=true;
//end class binding
// attribute binding
colspan=4;
//end


  // ex for event binding

r(event){
console.log(event);
alert("hii")

}

//end

//event filtering
p(event){
  console.log(event.target.value);
  
}
// end

//template reference
t(x){
  console.log('my mail is',x);
  
}

  





  constructor() { }

  ngOnInit() {
  }

}
