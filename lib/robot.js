'use strict';

class Robot {
  // implement your solution here!
  constructor (){
  // this.x = 0
  // this.y = 0
  // this.coordinates = [, this.y]
  }
  // this.coordinates = [this.x, this.y]
  orient (direction) {
    // East, West, South, North
    if (direction === "east" || direction === "west" || direction === "north" || direction === "south"){
      this.bearing = direction
      return direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

 turnRight () {
    if (this.bearing === "north"){
      this.bearing = "east"
    } else if (this.bearing === "east"){
      this.bearing = "south"
    } else if (this.bearing === "south"){
      this.bearing = "west"
    } else if (this.bearing === "west") {
      this.bearing = "north"
    }
  }

 turnLeft () {
    if (this.bearing === "north"){
      this.bearing = "west"
    } else if (this.bearing === "east"){
      this.bearing = "north"
    } else if (this.bearing === "south"){
      this.bearing = "east"
    } else if (this.bearing === "west") {
      this.bearing = "south"
    }
  }

 at (x, y) {
    this.coordinates = [x, y]
  }

 instructions(str) {
    let newarr = str.split("")
    let newnewarr = []
    newarr.forEach(char => {
        if (char === "L"){
          newnewarr.push("turnLeft")
        } else if (char === "R") {
          newnewarr.push("turnRight")
        } else if (char === "A") {
          newnewarr.push("advance")
        }
      })
      return newnewarr
  }

 place (object) {
    this.coordinates = [object.x, object.y]
    this.bearing = object.direction
  }

 evaluate (str){
    let newarr = str.split("")
    newarr.forEach( char => {
    if (char === "L"){this.turnLeft()}
    else if (char === "R") {this.turnRight()}
    else if (char === "A"){this.advance()}
  })
  }

 advance () {
    if (this.bearing === "north"){
      this.coordinates[1] += 1
    } else if (this.bearing === "east"){
      this.coordinates[0] += 1
    } else if (this.bearing === "south"){
      this.coordinates[1] -= 1
    } else if (this.bearing === "west") {
      this.coordinates[0] -= 1
    }
  }

}