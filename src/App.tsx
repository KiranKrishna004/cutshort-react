import { useState } from "react"
import "./App.css"
import { PhaseFour } from "./components/PhaseFour"
import { PhaseOne } from "./components/PhaseOne"
import { PhaseThree } from "./components/PhaseThree"
import { PhaseTwo } from "./components/PhaseTwo"

const App = () => {
	const [curPhase, setCurPhase] = useState(1)
	return (
		<div className=' h-screen flex flex-col justify-center items-center'>
			<div className='flex items-center'>
				<img
					className='h-10'
					src='https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80'
					alt='logo missing'
				/>
				<h1>Eden</h1>
			</div>
			<div className='flex space-x-10'>
				{[...Array(4)].map((item, index) => {
					return (
						<p
							key={index + 1}
							className='border border-black px-4 py-2 rounded-full'
						>
							{index + 1}
						</p>
					)
				})}
			</div>
			{
				{
					1: <PhaseOne />,
					2: <PhaseTwo />,
					3: <PhaseThree />,
					4: <PhaseFour />,
				}[curPhase]
			}
		</div>
	)
}
export default App
