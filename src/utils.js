const getNotes = () => {
	let arr = []
	let i = 0
	while(i<10){
		arr.push({
			name: "Sample",
			id: "id1",
			img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
			intro: `Simple simon met a pieman.
				Wha? What? What? What? Yeah!
				Wha? What? What? What? Yeah!
				Wha? What? What? What? Yeah!

			`,
			content: `Drives the technical strategy of the flowbite platform and brand.
				Lana drives the technical strategy of the flowbite platform and brand.
				Lana drives the technical strategy of the flowbite platform and brand.
				Lana drives the technical strategy of the flowbite platform and brand.
				Lana drives the technical strategy of the flowbite platform and brand.
			`
		})	
		console.log(arr)
		console.log(i)
		i++;
	}
	return arr
}

export {getNotes}