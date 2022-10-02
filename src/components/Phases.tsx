import { useState } from "react"
import { CurPhaseProps } from "../interface"
import { PhaseOne } from "./PhaseOne"
import { PhaseThree } from "./PhaseThree"
import { PhaseTwo } from "./PhaseTwo"

export const Phases = ({ curPhase, setCurPhase }: CurPhaseProps) => {
	const [displayName, setDisplayName] = useState("")
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
			headerText: `Congratulations, ${
				displayName === "" ? "Eren" : displayName
			}!`,
			subText: "You have completed onboarding, you can start using Eden!.",
		},
	]

	if (curPhase !== undefined) {
		return (
			<div className='flex flex-col items-center justify-center'>
				{curPhase === 4 && (
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='#664DE5'
						className='w-20 h-20 mb-10 mt-5'
					>
						<path
							fillRule='evenodd'
							d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
							clipRule='evenodd'
						/>
					</svg>
				)}
				<p className='text-3xl font-bold '>
					{phaseContent[curPhase - 1].headerText}
				</p>
				<p className='mt-3 text-gray-500'>
					{phaseContent[curPhase - 1].subText}
				</p>
				{
					{
						1: (
							<PhaseOne
								setCurPhase={setCurPhase}
								setDisplayName={setDisplayName}
								displayName={displayName}
							/>
						),
						2: <PhaseTwo setCurPhase={setCurPhase} />,
						3: <PhaseThree setCurPhase={setCurPhase} />,
						4: (
							<button
								className='mt-8 w-[400px] bg-[#664DE5] rounded-md border font-light text-white focus:none block flex-1 min-w-0 w-full text-sm border-gray-100 p-3.5'
								form='my-form'
								type='submit'
							>
								Launch Eden
							</button>
						),
					}[curPhase]
				}
			</div>
		)
	}
	return <></>
}
