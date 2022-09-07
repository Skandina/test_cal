import numberCruncher from "../../src/modules/calculation/numberCruncher.js"
import percentage from "../../src/modules/calculation/util/percentage.js"
import gcd from "../../src/modules/calculation/util/gcd.js"
import exp from "../../src/modules/calculation/util/exp.js"

describe("numberCruncher intergration tests", () => {

  it('should return 50 when given 1 and 2', () => {
 
   const data = { numOne: 1, operator: "percentage", numTwo: 2 }
   expect(numberCruncher(data)).toBe(50)
  })

})

