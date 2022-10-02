import { SyntheticEvent, useState } from "react"
import { CurPhaseProps } from "../interface"

export const PhaseTwo = ({ setCurPhase }: CurPhaseProps) => {
	const [workspaceName, setWorkspaceName] = useState("")
	const [url, setUrl] = useState("")
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
		const obj = {
			workspaceName: workspaceName,
			workspaceUrl: "www.eden.com/" + url,
		}
		console.log(obj)
		setCurPhase(3)
	}
	return (
		<form
			onSubmit={handleSubmit}
			id='my-form'
			className='space-y-5 mt-14 w-[400px]'
		>
			<div>
				<p className='text-sm mb-1'>Workspace Name</p>
				<input
					className='rounded-md border font-light focus:none block flex-1 min-w-0 w-full text-sm border-gray-100 p-3'
					placeholder='Eden'
					onChange={(e) => setWorkspaceName(e.target.value)}
				/>
			</div>
			<div>
				<div className='space-x-1 flex text-sm mb-1'>
					<p>Workspace URL</p>
					<p className='text-gray-300'>(optional)</p>
				</div>
				<div className='flex'>
					<span className='inline-flex items-center px-3 text-sm text-gray-400 bg-[#F8F9FC] rounded-l-md border border-r-0 border-gray-100'>
						www.eden.com/
					</span>
					<input
						onChange={(e) => setUrl(e.target.value)}
						type='text'
						id='website-admin'
						className='rounded-none rounded-r-md border font-light focus:none block flex-1 min-w-0 w-full text-sm border-gray-100 p-3'
						placeholder='Example'
					/>
				</div>
				<button
					className=' mt-5 bg-[#664DE5] rounded-md border font-light text-white focus:none block flex-1 min-w-0 w-full text-sm border-gray-100 p-3'
					form='my-form'
					type='submit'
				>
					Create Workspace
				</button>
			</div>
		</form>
	)
}
