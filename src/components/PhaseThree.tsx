import { useState } from "react"
import { CurPhaseProps } from "../interface"

export const PhaseThree = ({ setCurPhase }: CurPhaseProps) => {
	const [isTeam, setIsTeam] = useState(false)
	return (
		<div className='flex mt-10 items-center flex-col xs:w-[300px] sm:w-[400px] xs:space-y-3 sm:space-y-5'>
			<div className='flex'>
				<div
					onClick={() => setIsTeam(false)}
					className='flex-1 flex flex-col border rounded-lg xs:py-4 xs:px-3 sm:py-7 sm:px-5'
					style={!isTeam ? { borderColor: "#664DE5" } : {}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill={!isTeam ? "#664DE5" : "currentColor"}
						className='w-6 h-6'
					>
						<path
							fillRule='evenodd'
							d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
							clipRule='evenodd'
						/>
					</svg>
					<p className='mt-4 font-semibold'>For myself</p>
					<p className='flex-wrap text-gray-400 mt-2 text-sm'>
						Write better. Think more clearly. Stay organized.
					</p>
				</div>
				<div className='xs:mx-2 sm:mx-4'></div>
				<div
					onClick={() => setIsTeam(true)}
					style={isTeam ? { borderColor: "#664DE5" } : {}}
					className='flex-1 flex flex-col border xs:py-4 xs:px-3 sm:py-7 sm:px-5 rounded-lg'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill={isTeam ? "#664DE5" : "currentColor"}
						className='w-6 h-6'
					>
						<path
							fillRule='evenodd'
							d='M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z'
							clipRule='evenodd'
						/>
						<path d='M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z' />
					</svg>

					<p className='mt-4 font-semibold'>With my team</p>
					<p className='flex-wrap text-gray-400 mt-2 text-sm'>
						Wikis, docs, tasks & projects, all in one place.
					</p>
				</div>
			</div>
			<button
				onClick={() => setCurPhase(4)}
				className='bg-[#664DE5] rounded-md border font-light text-white focus:none block flex-1 min-w-0 w-full text-sm border-gray-100 p-3.5'
				form='my-form'
				type='submit'
			>
				Create Workspace
			</button>
		</div>
	)
}
