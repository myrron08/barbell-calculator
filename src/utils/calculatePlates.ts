import { PLATES } from "../constants/plates";
import type { Plate } from "../types/plates";
 
const BAR_WEIGHT = 20;

export function calculatePlates(totalWeight: number) {
 if (totalWeight < BAR_WEIGHT) {
    return [];
  }
 let remaining = (totalWeight - BAR_WEIGHT) / 2;
  const result: Plate[] = [];
   for (const plate of PLATES) {
    while (remaining >= plate.weight) {
        result.push(plate);
      remaining =  Math.round((remaining - plate.weight) * 100) / 100;
    }
 }
    return result;
}

// Я реализовал жадный алгоритм подбора блинов: 
// начиная с самых тяжёлых, последовательно уменьшаю остаток веса одной стороны штанги
//  до полного заполнения.