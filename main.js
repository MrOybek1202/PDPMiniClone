const main = document.querySelector('main')
let isScrolling = false

function getPageWidth() {
	return window.innerWidth - 320
}

main.addEventListener('wheel', (e) => {
	e.preventDefault()

	if (isScrolling) return

	if (e.deltaX !== 0) return
	e.preventDefault()


	const pageWidth = getPageWidth()
	const currentScroll = main.scrollLeft
	const maxScroll = main.scrollWidth - main.clientWidth

	let targetPage
	if (e.deltaY > 0) {
		targetPage = Math.floor(currentScroll / pageWidth) + 1
	} else {
		targetPage = Math.floor(currentScroll / pageWidth) - 1
	}

	targetPage = Math.max(0, Math.min(targetPage, Math.floor(maxScroll / pageWidth)))

	isScrolling = true

	main.scrollTo({
		left: targetPage * pageWidth,
		behavior: 'smooth'
	})

	setTimeout(() => {
		isScrolling = false
	}, 1000)
}, { passive: false })