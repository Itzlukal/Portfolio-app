import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' >
        <form  action="https://getform.io/f/66e7e3e5-9b9d-4582-8558-579b5d13d69e" method="POST">
            <div>
                <p className='contact-txt'>
                    Contact
                </p>
                <p className='contact-txt' style={{fontWeight:500, fontSize:'20px'}}> 
                   // Submit the form below, or contact me through Email- lukalursmanashvili398@gmail.com
                </p>
            </div>
        <input className='name-input' type='text'  placeholder='Name' name='name'/>
        <input type="Email"  className='email-input' placeholder='Email' name='email'/> 
        <textarea  className='textarea' cols='60' rows="10" placeholder='Message' name='message'/>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mx-auto flex items-center mt-2 duration-200'> Let's Collab</button>
        </form>
    </div>
  )
}

export default Contact