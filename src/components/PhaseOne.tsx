import { SyntheticEvent, useState } from "react"

export const PhaseOne = ({
	setCurPhase,
	setDisplayName,
	displayName,
}: {
	setCurPhase: React.Dispatch<React.SetStateAction<number>>
	setDisplayName: React.Dispatch<React.SetStateAction<string>>
	displayName: string
}) => {
	const [name, setName] = useState("")
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
		const obj = { name: name, displayName: displayName }
		setCurPhase(2)
	}
	return (
		<form
			className='xs:space-y-3 sm:space-y-5 mt-14 xs:w-[300px] sm:w-[400px]'
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
				className='bg-[#664DE5] rounded-md border font-light text-white focus:none block flex-1 min-w-0 w-full text-sm border-gray-100 p-3.5'
				form='my-form'
				type='submit'
			>
				Create Workspace
			</button>
		</form>
	)
}
