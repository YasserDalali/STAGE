import React from 'react'

function Button({content = "", icon = null}) {
  return (
    <button className="bg-white flex items-center gap-4 text-black px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-200 outline outline-gray-50/50 outline-1  outline-offset-4">
                            {icon}  {content}
                        </button>
  )
}

export default Button