import { SyntheticEvent, useState } from "react"

export const PhaseOne = () => {
	const [name, setName] = useState("")
	const [displayName, setDisplayName] = useState("")
	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault()
		const obj = { name: name, displayName: displayName }
		console.log(obj)
	}
	return (
		<div>
			<h1>Welcome! First things first...</h1>
			<p>You can always change them later.</p>
			<form onSubmit={handleSubmit}>
				<div>
					<p className='text-sm font-light'>Full Name</p>
					<input
						placeholder='Steve Jobs'
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<p className='text-sm font-light'>Display Name</p>
					<input
						placeholder='Steve'
						onChange={(e) => setDisplayName(e.target.value)}
					/>
				</div>
				<button type='submit'>Create Workspace</button>
			</form>
		</div>
	)
}
