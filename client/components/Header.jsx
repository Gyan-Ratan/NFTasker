import React from 'react'

const Header = () => {
      return (
  
        <div className="bg-transparent overflow-hidden relative lg:flex lg:items-center">
          <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">
                Mother hearth host your travel
              </span>
            </h2>
            <p className="text-md mt-4 text-gray-400">
              The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient &amp; awe inspiring.
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 p-8 lg:p-24">
            <img src="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="rounded-lg w-1/2" alt="Tree" />
            <div>
              <img src="https://cdn-icons-png.flaticon.com/128/6298/6298900.png" className="rounded-lg mb-9" alt="Tree" />
              <img src="https://images.unsplash.com/photo-1628544106915-0d756c7dadfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="rounded-lg" alt="Tree" />
            </div>
          </div>
        </div>
      )
    }

  export default Header