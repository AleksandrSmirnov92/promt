const Animal = function (options) {
   this.name = options.name
   this.color = options.color
   // this.voice = function () {
   //    console.log('гав')
   // }
}

Animal.prototype.voice = function () {
   console.log('гав' ,this.name);
}

const dog = new Animal({name: 'Rex', color:'#fff'})


dog.voice();