document.addEventListener('DOMContentLoaded', function () {

	document.querySelectorAll('.particles').forEach(wrapper => {
		let svg = wrapper.querySelector('svg')
		let pathArr = svg.querySelectorAll('path')
		let mouseRadius = 50
		let xPositionArr = []
		let yPositionArr = []

		pathArr.forEach(elem => {
			xPositionArr.push(svg.getBoundingClientRect().left + window.pageXOffset + elem.getBBox().x)
			yPositionArr.push(svg.getBoundingClientRect().top + window.pageYOffset + elem.getBBox().y)
		})

		wrapper.addEventListener('mousemove', (e) => {
			pathArr.forEach((elem, index) => {
				let xDiff = xPositionArr[index] - e.clientX
				let yDiff = yPositionArr[index] - e.clientY

				if (((xDiff) ** 2 + (yDiff) ** 2) <= (mouseRadius ** 2)) {
					elem.style.transform = `translate(${xDiff}px, ${yDiff}px)`

					setTimeout((e) => {
						elem.style.transform = `none`
					}, 1000)
				}
			})
		})
	})


});