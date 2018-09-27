import {DateTime} from "luxon";

export default interface Plant {
  id: number;
  name: string;
  creation: DateTime;
}
