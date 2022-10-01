import { useState } from "react"
import { PhaseFour } from "./PhaseFour"
import { PhaseOne } from "./PhaseOne"
import { PhaseThree } from "./PhaseThree"
import { PhaseTwo } from "./PhaseTwo"

export const Phases = () => {
	const [curPhase, setCurPhase] = useState(1)
	const phaseContent = [
		{
			headerText: "Welcome! First things first...",
			subText: "You can always change them later.",
		},
		{
			headerText: "Let's set up a home for all your work",
			subText: "You can always create another workspace later.",
		},
		{
			headerText: "How are you planning to use Eden ?",
			subText: "We'll streamline your setup experience accordingly.",
		},
		{
			headerText: "Congratulations, Eren!",
			subText: "You have completed onboarding, you can start using Eden!.",
		},
	]
	return (
		<div className='flex flex-col items-center justify-center'>
			<h1>{phaseContent[curPhase - 1].headerText}</h1>
			<p>{phaseContent[curPhase - 1].subText}</p>
			{
				{
					1: <PhaseOne />,
					2: <PhaseTwo />,
					3: <PhaseThree />,
					4: <PhaseFour />,
				}[curPhase]
			}
			<button form='my-form' type='submit'>
				{curPhase !== 4 ? `Create Workspace` : `Launch Eden`}
			</button>
			<div className='flex space-x-10'>
				{[...Array(4)].map((item, index) => {
					return (
						<p
							key={index + 1}
							className='border border-black px-4 py-2 rounded-full'
							onClick={() => setCurPhase(index + 1)}
						>
							{index + 1}
						</p>
					)
				})}
			</div>
		</div>
	)
}
