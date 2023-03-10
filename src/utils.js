const getNotes = () => {
	let arr = []
  let i = 0
  while(i<10){
    arr.push({
      name: "Sample",
      id: "id1",
      img: "https://placekitten.com/g/800/800",
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

function uuidv4() { // https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

export {getNotes, uuidv4}