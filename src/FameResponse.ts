import { FameComplete } from "./FameComplete";
import { FameTiny } from "./FameTiny";
// 1.Create interfaces for hall of fame.
// 2.create a getAll() function in this file to get all results.
// 3. create a getTiny() function in this file to return tiny result.

export interface FameResponse {
  complete: FameComplete[];
  tiny: FameTiny[];
}
