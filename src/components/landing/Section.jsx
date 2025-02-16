import React from 'react'

function Section() {
    return (
        <section className='flex justify-between mx-20 my-32'>
            <div className='w-1/3'>
                <h2 className='text-6xl font-semibold' >Make managing requests less painful</h2>
                <ul className='mt-10 list-disc pl-5 text-xl'>
                    <li className='mt-4'>Manage your day-to-day work tasks</li>
                    <li className='mt-4'>Prioritize tasks depending on urgency</li>
                    <li className='mt-4'>Assign tasks to others seamlessly</li>
                    <li className='mt-4'>Get notified on the go!</li>
                </ul>

            </div>

            <div >
                <img className='rounded-3xl w-[50rem]  shadow-xl ' src="https://www.qodo.ai/wp-content/uploads/2024/11/qodomerge.gif" alt="" />
            </div>


        </section>
    )
}

export default Section