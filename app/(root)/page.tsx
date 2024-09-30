import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedInUser={firstName:'Surya',lastName:'Gajjela'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Welcome"
          subtext="Access and manage your bank account with unparalleled ease and efficiency, ensuring total control over your finances at your fingertips."
          user={loggedInUser.firstName || 'Guest'}
           />
        </header>
        <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={5500.75}/>
      </div>
    </section>
  )
}

export default Home
