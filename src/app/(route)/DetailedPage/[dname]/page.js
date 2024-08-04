import ShiningText from '@/app/_components/ShiningText'
import Image from 'next/image'
import React from 'react'

function ClubDetailsPage({params}) {
  return (
    <>
      <div className="flex justify-center">
        <ShiningText text={params.dname} />
      </div>
      <div className="flex flex-cols-2 p-8 ">
        <div className="w-[18%]">
        <Image  className="rounded-2xl" src="/StudentCouncilLogo.png" alt="Student Council" width="200" height="200" />
        </div>
        <div className="w-[82%]">
          <p className="text-lg"> 
            Our logo, a testament to student leadership, symbolizes you - the crown jewels of Bennett University. Your aspirations, your voice, your potential are at the core of everything we do. We pledge to be your unwavering support system, your confidantes, and your partners in progress. 
            <br />
            Let us create a campus where diversity is celebrated, innovation thrives, and every Bennettian feels a profound sense of belonging. Together, we will write a chapter in our university's history that will be remembered for generations to come. 
            <br />
            <span className="flex text-2xl font-bold mt-6">Your journey is our mission.</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
      <ShiningText text="Members" />
      </div>
      <div>
        <div className="ml-10">
          <ShiningText  text="President" size="medium" />
        </div>
        <div className="ml-8">
          <Image className="mt-4" src="/image.png" alt="Student Council Members" width="150" height="150" />
        </div>
        <span className="flex mt-4 ml-3 font-bold text-2xl">Piyush Kumar Jain</span>
        <span className="flex mt-4 ml-16 text-lg">President</span>
      </div>
      <div>
        <div className="ml-10">
          <ShiningText  text="President" size="medium" />
        </div>
        <div className="ml-8">
          <Image className="mt-4" src="/image.png" alt="Student Council Members" width="150" height="150" />
        </div>
        <span className="flex mt-4 ml-3 font-bold text-2xl">Piyush Kumar Jain</span>
        <span className="flex mt-4 ml-16 text-lg">President</span>
      </div>
    </>
  )
}

export default ClubDetailsPage
