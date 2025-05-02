import React from 'react'

function Contect() {
  return (
    <div>
      <form
  onSubmit={(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const msg = e.target.message.value;
    const whatsappURL = `https://wa.me/923211628950?text=${encodeURIComponent(
      `Name: ${name}\nMessage: ${msg}`
    )}` ;
    window.open(whatsappURL, '_blank');
  }}
  className="flex flex-col gap-4 max-w-md mx-auto p-4 m-6 border rounded-xl"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="border p-2 rounded"
    required
  />
  <textarea
    name="message"
    placeholder="Your Message"
    className="border p-2 rounded"
    required
  ></textarea>
  <button
    type="submit"
    className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
  >
    Send on WhatsApp
  </button>
</form>

    </div>
  )
}

export default Contect