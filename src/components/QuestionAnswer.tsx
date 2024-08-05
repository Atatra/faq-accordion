"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";

interface Props {
	question: string;
	children: ReactNode; //answer
}

const QuestionAnswer = ({ question, children }: Props) => {
	const [reveal, setReveal] = useState(false);

	return (
		<div className="pb-7">
			<span className="flex flex-row justify-between mt-8" onClick={() => setReveal(!reveal)}>
				<h2 className={"text-dark-purple font-semibold hover:text-purpl-ish text-lg"}>
					{question}
				</h2>
				{!reveal ? <Image src="/images/icon-plus.svg" alt="Icon Plus" width={28} height={28} /> :
					<Image src="/images/icon-minus.svg" alt="Icon Minus" width={28} height={28} />}
			</span>
			{reveal && <p className="text-grayish-purple pt-4">
				{children}
			</p>}
		</div>
	)
}

export default QuestionAnswer