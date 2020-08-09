import React from "react"

const Content = ({ children }) => {

  return (
    <div className="w-full px-4">
      <div className="max-w-screen-lg p-4 md:p-10 rounded-lg bg-black relative mx-auto -mt-24 mb-24">
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Content
