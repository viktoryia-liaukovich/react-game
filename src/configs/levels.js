import level1 from "../../assets/backgrounds/4.png"
import obstacles from "./obstacles"

export default {
  test: {
    image: level1,
    obstacles: [
      {
        type: obstacles.RECTANGLE,
        pos: 600,
        y: 0,
      },
      {
        type: obstacles.RECTANGLE,
        pos: 300,
        y: 0,
      },
      {
        type: obstacles.RECTANGLE,
        pos: 100,
        y: 100,
      },
      {
        type: obstacles.RECTANGLE,
        pos: 100,
        y: 200,
      },
      {
        type: obstacles.RECTANGLE,
        pos: 100,
        y: 300,
      },
      {
        type: obstacles.RECTANGLE,
        pos: 150,
        y: 0,
      },
    ]
  }
}