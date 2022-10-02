import { SyntheticEvent, useState } from "react"
import { CurPhaseProps } from "../interface"

export const PhaseOne = ({ setCurPhase }: CurPhaseProps) => {
	const [name, setName] = useState("")
	const [displayName, setDisplayName] = useState("")
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
		const obj = { name: name, displayName: displayName }
		console.log(obj)
		setCurPhase(2)
	}
	return (
		<form
			className='space-y-5 mt-14 w-[400px]'
			id='my-form'
			onSubmit={handleSubmit}
		>
			<div>
				<p className='text-sm mb-1'>Full Name</p>
				<input
					className='rounded-md border font-light focus:none block flex-1 min-w-0 w-full text-sm border-gray-100 p-3'
					placeholder='Steve Jobs'
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<p className='text-sm mb-1'>Display Name</p>
				<input
					className='rounded-md border font-light focus:none block flex-1 min-w-0 w-full text-sm border-gray-100 p-3'
					placeholder='Steve'
					onChange={(e) => setDisplayName(e.target.value)}
				/>
			</div>
			<button
				className='bg-[#664DE5] rounded-md border font-light text-white focus:none block flex-1 min-w-0 w-full text-sm border-gray-100 p-3'
				form='my-form'
				type='submit'
			>
				Create Workspace
			</button>
		</form>
	)
}
