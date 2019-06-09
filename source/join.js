/**
 * @description
 *  Flattens one level an array data structure.
 * @signature
 *  join :: [[a]] -> [a]
 * @example
 *  join([[1, 2, 3], [], [4, 5], [6]]);
 *  //-> [ 1, 2, 3, 4, 5, 6 ]
 * 
 */

import { foldr, concat, pcurry } from "./exporter";


export default foldr(concat)([]);
