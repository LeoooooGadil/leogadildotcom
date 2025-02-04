import React from 'react'

interface ErrorHandlerProps {
	error: Error | string
}

const ErrorHandler = ({ error }: ErrorHandlerProps) => {
  return (
	<div className="my-4 border max-w-[576px] lg:max-w-none bg-[--color-red] border-[--color-red-border] p-2 rounded-lg">
		{typeof(error) === "object" ? error.message : error}
	</div>
  )
}

export default ErrorHandler