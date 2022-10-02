import "./App.css"
import { Phases } from "./components/Phases"
import edenLogo from "./assets/edenLogo.png"
import { useState } from "react"
import { Indicator } from "./components/Indicator"
const App = () => {
	const [curPhase, setCurPhase] = useState(1)
	return (
		<div className=' h-screen flex flex-col justify-center items-center'>
			<div className='flex items-end space-x-2'>
				<img className='h-10' src={edenLogo} alt='logo missing' />
				<p className='text-3xl font-semibold'>Eden</p>
			</div>
			<Indicator curPhase={curPhase} />
			<Phases curPhase={curPhase} setCurPhase={setCurPhase} />
		</div>
	)
}
export default App
