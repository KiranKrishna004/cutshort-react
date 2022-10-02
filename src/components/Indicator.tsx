export const Indicator = ({ curPhase }: { curPhase: number }) => {
	return (
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
											? "bg-[#664DE5] h-[0.1px] xs:w-5 sm:w-7 self-center"
											: "bg-gray-300 h-[0.1px] xs:w-5 sm:w-7 self-center"
									}
								></div>
								<div
									className={
										index + 1 < curPhase
											? "bg-[#664DE5] h-[0.1px] xs:w-5 sm:w-7 self-center"
											: "bg-gray-300 h-[0.1px] xs:w-5 sm:w-7 self-center"
									}
								></div>
							</>
						)}
					</>
				)
			})}
		</div>
	)
}
