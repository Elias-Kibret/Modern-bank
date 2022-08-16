import React from 'react'
import styles from '../style'
import Button from './Button'
const CTA = () =>  (
    <section className={`${styles.flexCenter}`}>
       <div>
         <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
         <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
       </div>
       <div>
        <Button/>
       </div>
    </section>
  )


export default CTA