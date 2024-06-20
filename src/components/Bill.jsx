import { useEffect, useState } from "react"

function Bill(){

	const [payment, setPayment] = useState(0)
	const [percent, setPercent] = useState(0)
	const [all, setAll] = useState(payment)

	

	const calculateAll = () => {

		// payment = Number(payment)
		// percent = Number(percent)
		if(percent == 0 && payment != 0){
			setAll(`All: $${payment}`)
		}else{
			if(payment == ''){
				setAll(`First enter Payment. Please !`)
			}else{
				let pay = Number(payment)
				let per = Number(percent)
				let sum = pay / 100 * per + pay
				setAll(`All: $${sum}`)
			}
		}
	}

	

	return(<>
			<div className="w-full h-[100dvh] flex justify-center items-center bg-gray-50 customFont">
				<div className="w-[300px] p-[24px] bg-gray-300 rounded-[12px] flex flex-col justify-start items-start gap-[12px]">
					<h1 className="text-[30px] font-bold">Bill Calculator:</h1>
					<span>Payment:</span>
					<input type="number" onChange={(evt) => setPayment(evt.target.value)} />
					<span>Percent:</span>
					<input type="number" onChange={(evt) => setPercent(evt.target.value)}/>
					<button className="bg-blue-800 text-white text-[20px] p-[6px] rounded-[12px] active:bg-blue-600"
							onClick={() => calculateAll()}>Calculate All</button>
					<p className="text-green-600 font-bold text-[24px]">{all}</p>

				</div>

			</div>
	</>)
}

export default Bill 