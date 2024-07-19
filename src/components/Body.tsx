import { useState } from 'react';
import emailjs from 'emailjs-com';
import { horizontalImage, verticalImage1, verticalImage2 } from '../assets';

export default function Body() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (message.trim() === '') {
      setError('The message cannot be empty.');
      return;
    }

    const templateParams = {
      message,
      to_email: 'cesaltinoquianvo@gmail.com',
    };

    emailjs.send(
      'service_c21kskl', // replace with your EmailJS service ID
      'template_yl16gf7', // replace with your EmailJS template ID
      templateParams,
      'BQoy3ajZEaf5O6TSB' // replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setMessage('');
      setError('');
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
      setError('Failed to send email. Please try again later.');
    });
  };

  return (
    <main className="w-screen h-full gap-y-10 md:gap-y-2 py-12 md:py-5 font-cabin flex-col-reverse items-center justify-center md:flex-row bg-[#FF7F50] flex">
      <section className="w-full md:w-1/2 flex flex-col gap-y-5 justify-center items-center">
        <div>
          <p className="w-80 md:w-96 text-base md:text-lg">
            Amar é ter um pássaro pousado no dedo. <br />
            Quem tem um pássaro pousado no dedo sabe que, <br />
            a qualquer momento, ele pode voar. <br />
          </p>
          <p className="font-playwrite-dk-uloopet text-sm">Rubem Alves</p>
        </div>
        <form onSubmit={sendEmail} className="w-full flex flex-col gap-y-2 justify-center items-center">
          <textarea
            id="message"
            draggable="false"
            autoComplete="message"
            placeholder="Escreva mensagens, em caso de querer manisfestar feedbacks para mim..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-80 md:w-96 rounded-md border-2 px-3.5 py-1.5 text-black bg-[#E37046] shadow-sm border-[#FFDAB9]  text-md sm:leading-6 outline-none placeholder:text-[#FFDAB9]"
          ></textarea>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="block px-4 py-2 text-md font-bold w-80 md:w-96 border-2 border-[#FFDAB9] rounded-lg text-[#FF7F50] bg-[#FFDAB9] transition-all"
          >
            Send
          </button>
        </form>
      </section>

      <section className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full flex flex-col gap-y-2 justify-center items-center">
          <img
            className="w-[200px] md:w-[390px] rounded-lg shadow-sm shadow-[#FFDAB9]"
            src={horizontalImage}
            alt="heart"
          />
          <div className="flex gap-2 w-full justify-center">
            <img
              className="w-[95px] md:w-48 rounded-lg shadow-sm shadow-[#FFDAB9]"
              src={verticalImage1}
              alt="heart"
            />
            <img
              className="w-[95px] md:w-48 rounded-lg shadow-sm shadow-[#FFDAB9]"
              src={verticalImage2}
              alt="heart"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
