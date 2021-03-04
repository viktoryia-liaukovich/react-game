import obstacles from "./obstacles"

export default {
  test: {
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