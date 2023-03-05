"use strict";
const l = (l) => {
  console.log(l);
};
class First{
  hello(){
    l("Привет я метод родителя!");
  }
}
class Second extends First{
  hello(){
    super.hello()
       setTimeout(l("А я наследуемый метод!"), 3000);
  }
}
const second = new Second()
l(second.hello());