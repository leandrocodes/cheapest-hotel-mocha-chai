const chai = require('chai')
const expect = chai.expect
const cheapestHotel = require('../src/cheapestHotel')

describe('Entrada 1', () => {
	it('Should return Parque da Flores', () => {
		expect(
			cheapestHotel('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')
		).to.equals('Parque das Flores')
	})
})

describe('Entrada 2', () => {
	it('Should return Jardim Botânico', () => {
		expect(
			cheapestHotel('Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)')
		).to.equals('Jardim Botânico')
	})
})

describe('Entrada 3', () => {
	it('Should return Mar Atlântico', () => {
		expect(
			cheapestHotel(
				'Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)'
			)
		).to.equals('Mar Atlântico')
	})
})

// describe('Teste do cálculo das datas', function () {
// 	it('Should return total value from staying', function () {
// 		expect(
// 			cheapestHotel('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')
// 		).to.equal(330)
// 	})
// })
