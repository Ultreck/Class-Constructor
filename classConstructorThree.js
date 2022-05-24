class PersonalComputer{
      constructor(nam, year)
      {
            this.nam = nam;
            this.year = year;
      }
      age(x)
      {
           return x - this.year;
      }
}
let date = new Date();
let year = date.getFullYear();


let pc = new PersonalComputer("Dell", 2019);
console.log(pc)
console.log(pc.nam)
console.log(pc.year)
console.log(pc.age(year) + " years old")