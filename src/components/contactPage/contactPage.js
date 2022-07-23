import emailjs from 'emailjs-com'
const ContactPage = ({ innerRef })=>{

    const SendData = (e)=>{
        e.preventDefault();

    emailjs.sendForm('service_cgtuv2q', 'template_c7r0uzb', e.target, 'pNHewHZ_2Cpgschb5')
      .then((result) => {
        alert('Thank You For Contacting ')
      }, (error) => {
        alert("Some Kind Of error occured Please try Again Later")
      }
      );
      e.target.reset();
  };

    




    return(<section className="text-cusWhite bg-cusGreen font-poppins relative" ref={innerRef}>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Me</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Wanna connect! , Contact me right now and lets work togather</p>
    </div>
    <form onSubmit={SendData}>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name"  className="w-full bg-gray-100 bg-opacity-50 rounded focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-cusBlue" name='user_name' required={true}/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" className="w-full bg-gray-100 bg-opacity-50 rounded  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  text-cusBlue" name='user_email'  required={true}/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label  className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded  focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out  text-cusBlue" ></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button type='submit' className="flex mx-auto text-white bg-cusBlue border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg shadow-lg">Submit</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</section>)
}
export default ContactPage;