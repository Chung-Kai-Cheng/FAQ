export default function QandA({ question, answer}) {
  return (
    <div className="py-4">
      <div className="font-semibold text-base pr-12">
        {question}
        <div/>
      </div>
      <div className="font-normal text-base my-2 text-gray-500">
        {answer}
      </div>
    </div>
  )
}
