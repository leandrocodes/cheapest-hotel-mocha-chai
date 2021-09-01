const hotels = require('./hotels')

const storeStayingPerHotel = (stayingDays, category, hotel) => {
	const nights = []
	const days = stayingDays.map(day => new Date(day).getDay())

	days.forEach(day => {
		if (day === 0 || day === 6) {
			nights.push(
				hotel.weekend[category === 'Regular' ? 'regular' : 'fidelity']
			)
		} else {
			nights.push(
				hotel.weekday[category === 'Regular' ? 'regular' : 'fidelity']
			)
		}
	})
	console.log(nights)
	return nights
}

const assignTotalValueToHotel = (stayingDays, category) => {
	const hotelsToCheck = [...hotels]
	const hotelsWithTotalValue = []

	hotelsToCheck.forEach((hotel, index) => {
		let currentHotel = hotelsToCheck[index]
		const nights = storeStayingPerHotel(stayingDays, category, hotel)

		hotelsWithTotalValue.push({
			name: currentHotel.name,
			rating: currentHotel.rating,
			totalValue: nights.reduce((acc, value) => acc + value, 0)
		})
	})

	return filterCheapest(hotelsWithTotalValue)
}

const filterCheapest = hotels => {
	let cheapest = hotels[0]
	hotels.forEach((_, index) => {
		const currentHotel = hotels[index]

		if (
			currentHotel.totalValue < cheapest.totalValue ||
			(currentHotel.totalValue === cheapest.totalValue &&
				currentHotel.rating > cheapest.rating)
		) {
			cheapest = currentHotel
		}
	})
	console.log(cheapest.name)
	return cheapest.name
}

const cheapestHotel = stay => {
	let [category, stayingDays] = stay.split(':')
	stayingDays = stayingDays.split(',')

	return assignTotalValueToHotel(stayingDays, category)
}

// cheapestHotel('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)')

module.exports = cheapestHotel
