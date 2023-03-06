import { RxShare1, RxPencil1 } from "react-icons/rx";

const NoteOverview = (props) => {
	/*
		props => name, img, content, intro, id
	*/
	return (
	<div className="items-center bg-gray-50 rounded-lg shadow sm:flex bg-gray-800 border-gray-700">
	    <a href="#">
	        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={props.img} alt={props.name}/>
	    </a>
	    <div className="p-5">
	        <h3 className="text-xl font-bold tracking-tight text-gray-900 text-white">
	            <a href={"/plans/edit/"+props.id}>{props.name}</a>
	        </h3>
	        <br/>
	        <span className="text-gray-500 text-gray-400">{props.intro}</span>
	        <p className="mt-3 mb-4 font-light text-gray-500 text-gray-400">{props.content}</p>
	        <ul className="flex space-x-4 sm:mt-0">
	            <li>
	                <button className="text-gray-500 hover:text-gray-900 hover:text-white">
	                	<RxShare1/>
	                </button>
	            </li>
	            <li>
	                <a href={"/plans/edit/" + props.id} className="text-gray-500 hover:text-gray-900 hover:text-white">
	                	<RxPencil1/>                
	                </a>
	            </li>
	        </ul>
	    </div>
	</div>  
	)
}

export {NoteOverview}