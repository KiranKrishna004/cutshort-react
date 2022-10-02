import "./App.css"
import { Phases } from "./components/Phases"
import edenLogo from "./assets/edenLogo.png"
import { useState } from "react"
const App = () => {
	const [curPhase, setCurPhase] = useState(1)
	return (
		<div className=' h-screen flex flex-col justify-center items-center'>
			<div className='flex items-end space-x-2'>
				<img className='h-10' src={edenLogo} alt='logo missing' />
				<p className='text-3xl font-semibold'>Eden</p>
			</div>
			<div className='flex'>
				{[...Array(4)].map((item, index) => {
					return (
						<>
							<p
								key={index + 1}
								className={
									index + 1 <= curPhase
										? "bg-[#664DE5] my-20 text-white text-sm px-4 py-2.5 rounded-full"
										: "border text-black my-20 text-sm px-4 py-2.5 rounded-full"
								}
							>
								{index + 1}
							</p>
							{index + 1 !== 4 && (
								<>
									<div
										className={
											index + 1 <= curPhase
												? "bg-[#664DE5] h-[0.1px] w-7 self-center"
												: "bg-gray-300 h-[0.1px] w-7 self-center"
										}
									></div>
									<div
										className={
											index + 1 < curPhase
												? "bg-[#664DE5] h-[0.1px] w-7 self-center"
												: "bg-gray-300 h-[0.1px] w-7 self-center"
										}
									></div>
								</>
							)}
						</>
					)
				})}
			</div>
			<Phases curPhase={curPhase} setCurPhase={setCurPhase} />
		</div>
	)
}
export default App
