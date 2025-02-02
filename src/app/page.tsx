import QuestionAnswer from "@/components/QuestionAnswer";
import Image from "next/image";

export default function Home() {

  return (
    <main className="h-screen font-workSans hero-bg py-[32%] px-[5%] sm:py-[8%] xl:px-[28%]">

      <div className=" bg-white rounded-xl px-7 pt-10 drop-shadow-2xl">


        <span className="flex flex-row pt-5 pb-7">
          <Image src={"/images/icon-star.svg"}
            alt="Icon star" height={46} width={46} />
          <h1 className="font-workSans font-bold text-5xl text-dark-purple pl-5">FAQs</h1>
        </span>

        <QuestionAnswer
          question="What is Frontend Mentor, and how will it help me?"

        >
          Frontend Mentor offers realistic coding challenges to help developers improve
          their frontend coding skills with projects in HTML, CSS, and JavaScript. It&apos;s
          suitable for all levels and ideal for portfolio building.
        </QuestionAnswer>

        <hr />

        <QuestionAnswer
          question="Is Frontend Mentor free?"
        >
          Yes, Frontend Mentor offers both free and premium coding challenges, with the
          free option providing access to a range of projects suitable for all skill levels.
        </QuestionAnswer>

        <hr />

        <QuestionAnswer
          question="Can I use Frontend Mentor projects in my portfolio?"
        >
          Yes, you can use projects completed on Frontend Mentor in your portfolio.
          It&apos;s an excellent way to showcase your skills to potential employers!
        </QuestionAnswer>

        <hr />

        <QuestionAnswer
          question="How can I get help if I&apos;m stuck on a Frontend Mentor challenge?"
        >
          The best place to get help is inside Frontend Mentor&apos;s Discord community.
          There&apos;s a help channel where you can ask questions and seek support from other
          community members.
        </QuestionAnswer>


      </div>

    </main>

  );
}
