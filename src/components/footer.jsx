const Footer = () => {
  return (
    <section className='relative w-full flex-between mt-[10rem] px-19 md:px-32 bg-bg'>
        <div className="flex-between w-full border-t-2 py-14 border-primary">
            <div className='logo-left-side'>
                <img className='w-48 object-cover' src="./src/assets/images/logo.png" alt="logo" />
            </div>
            <div className='flex-center gap-4'>
                <img className='w-18 object-cover' src="./src/assets/images/fb.png" alt="facebook-image" />
                <img className='w-20 object-cover' src="./src/assets/images/insta.png" alt="facebook-image" />
            </div>
        </div>
    </section>
  )
}

export default Footer