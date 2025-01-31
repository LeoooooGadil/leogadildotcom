import React from 'react'

interface ErrorHandlerProps {
	error: any
}

const ErrorHandler = ({ error }: ErrorHandlerProps) => {
  return (
	<div className="my-4 border max-w-[576px] lg:max-w-none bg-[--color-red] border-[--color-red-border] p-2 rounded-lg">
		{error.message}
	</div>
  )
}

export default ErrorHandler