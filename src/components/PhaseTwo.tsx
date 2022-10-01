import { SyntheticEvent, useState } from "react"

export const PhaseTwo = () => {
	const [workspaceName, setWorkspaceName] = useState("")
	const [url, setUrl] = useState("")
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
		const obj = { workspaceName: workspaceName, workspaceUrl: url }
		console.log(obj)
	}
	return (
		<div>
			<form onSubmit={handleSubmit} id='my-form'>
				<div>
					<p className='text-sm font-light'>Workspace Name</p>
					<input
						placeholder='Eden'
						onChange={(e) => setWorkspaceName(e.target.value)}
					/>
				</div>
				<div>
					<div className='flex'>
						<p className='text-sm font-light'>Workspace URL</p>
						<p className='text-sm font-light'>(optional)</p>
					</div>
					<input placeholder='Steve' onChange={(e) => setUrl(e.target.value)} />
				</div>
			</form>
		</div>
	)
}
