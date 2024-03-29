import { useState } from "react"

export default function QandA({ question, answer}) {

  const [more, setMore] = useState(false)

  const toggleInformation = () => {
    setMore(!more)
  }

  return (
    <div className="py-4">
      <div className="font-semibold text-base lg:text-xl flex justify-between items-center hover:text-dark-purple active:text-dark-purple">
        <div className="pr-4 flex-1">
          {question}
        </div>        
        <span>
          <div onClick={toggleInformation} className="flex-none">
          {more?
          <img src="../src/assets/images/icon-minus.svg" alt="minus"/>
          :
          <img src="../src/assets/images/icon-plus.svg" alt="plus"/>
          }
          </div>
        </span>
      </div>
      {more && <div className="font-normal text-base lg:text-lg my-2 text-gray-500">
        {answer}
      </div>}
    </div>
  )
}
