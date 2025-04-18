const ContactScreen = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <div className="flex flex-col justify-center px-[10%]">
      <div className="text-center mx-auto mb-10">
        <h1 className="text-4xl">CONTACT</h1>
        <p className="text-xl font-light w-3/4 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet laboriosam ipsa quibusdam fuga architecto perspiciatis voluptas, iste animi quo enim recusandae provident possimus corporis repellat qui. Eligendi, sit quibusdam?</p>
      </div>
      <form action="#" className="w-3/4 mx-auto flex flex-col items-center gap-5" onSubmit={handleSubmit}>
        <div className="flex justify-between gap-5 w-full">
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
        </div>
        <input type="text" placeholder="Subject" name="subject" />
        <textarea placeholder="Message" rows={5} name="message" />
        <button type="submit" className="text-xl text-kAppBlack bg-kAppYellow px-12 py-2 rounded-lg">Submit</button>
      </form>
    </div>
  )
}

export default ContactScreen