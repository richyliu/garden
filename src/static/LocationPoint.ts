import Plant from "./Plant";


export default interface LocationPoint {
  position: {
    x: number;
    y: number;
  };
  plant: Plant;
}
