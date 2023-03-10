import {RxFilePlus, RxEyeOpen} from 'react-icons/rx'
import { Form, useNavigate} from "react-router-dom"
import {useState} from 'react'
import {uuidv4} from './utils' 
import template from './temp.json'

const Create = () =>{	
	const privateValue = "Private"
	const publicValue = "Public (only via link)"

	let [name, setName] = useState("")
	let [description, setDescription] = useState("")
	let [visibility, setVisibility] = useState(publicValue)



	const nameUpdate = (e) => {
		setName(e.target.value)
	}
	const descriptionUpdate = (e) => {
		setDescription(e.target.value)
	}
	const visibilityUpdate = (e) => {
		setVisibility(e.target.value)
	}

	const submit = (e) => {
		const id = uuidv4()
		const content = template
		let currentItems = JSON.parse(localStorage.getItem('plans') ?? '[]')
		console.log(currentItems)
		currentItems.unshift({
						name:name,
						description: description,
						visibility: visibility,
						id: id,
						content: content,
						html: "Write something,"
				})
		localStorage.setItem('plans', JSON.stringify(currentItems))

		console.log(name)
		console.log(description)
		console.log(visibility)
		console.log(id)
		navigate('/plans/edit/'+id)
	}

	const navigate = useNavigate()
{/*
	0->public, 1->private
*/}

	return (
		<div className="mx-64 my-4 pt-4">			
			<div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
				<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Create a plan</h2>
				<p className="font-light text-gray-300 lg:mb-16 sm:text-xl text-gray-200">
					Add the name of your plan, a short description and whether of not you can share your plan.
				</p>
			</div>
			<Form>
				<label htmlFor="name" className="my-4 font-bold text-4xl block mb-2 text-sm text-gray-900 dark:text-white">
					Name
				</label>
				<div className="relative text-white">
				  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				  	<RxFilePlus/>
				  </div>
				  <input onChange={nameUpdate} required type="text" id="name" className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
				  	placeholder="Important plan"/>
				</div>

				<label htmlFor="description" className="my-4 font-bold text-4xl block mb-2 text-sm text-gray-900 dark:text-white">
					Description
				</label>
				<div className="relative text-white">
				  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				  	<RxEyeOpen/>
				  </div>
				  <input onChange={descriptionUpdate} required type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				  	placeholder="A plan that can change the world...."/>
				</div>

				<label htmlFor="email-address-icon" className="my-4 font-bold text-4xl block mb-2 text-sm text-gray-900 dark:text-white">
					Visibility
				</label>
				<div className="relative text-white">
				  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				  	<RxEyeOpen/>
				  </div>
				  <select onChange={visibilityUpdate} id="visiblity" className="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@flowbite.com">
				    <option>{publicValue}</option>
				    <option>{privateValue}</option>
				  </select>
				 </div>
				 <button onClick={submit} className="rounded-lg py-2 bg-gray-700 ml-[98px] my-8 px-64 border-gray-700 placeholder-gray-400 text-white">Submit</button>
			</Form>
		</div>
	)
}

export {Create}