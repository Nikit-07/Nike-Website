import React from 'react'
import Hero from './sections/Hero'
import CustomerReviews from './sections/CustomerReviews'
import Nav from './components/Nav'

const App = () => {
  return (
    <main className='relative'>

      {/* Navigation */}
      <Nav/>

      <section className='xl:padding-1 wide:padding-r padding-b'>
       <Hero/>
      </section>

      <section className='padding'>
        Popular Product
      </section>
      <section className='padding'>
        Super Quality
      </section>
      <section className='padding-x py-10'>
        Services
      </section>
      <section className='padding'>
        Special Offers
      </section>
      <section className=' bg-pale-blue padding'>
        <CustomerReviews/>
        Customer Reviews
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        Subscribe
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        Footer
      </section>
    </main>

  )
}

export default App
