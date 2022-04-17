import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div id='homeComponent' className={styles.container}>
        <section className='section headerSectionOne'>
          <img src="/twocircles.svg" className='twoCircles' alt="" />
          <div className="leftSectionHeader">
            <div className='basicDescr'>
              <p id='basicDesc'><span style={{fontSize:"20px"}}>I am Aime Cyuzuzo,</span> <br /> <span style={{fontSize:"25px"}}>a web designer and</span> <br /> <span style={{fontSize:"30px"}}>front-end developer.</span></p>
              <p className="borderSorround" style={{display:"table",marginTop:"35px",padding:"20px"}}>Email Me</p>
            </div>
            <div>
            </div>
          </div>
        </section>
        <section className="section headerSectionTwo">
          <img src="/tryit.svg" alt="" />
        </section>
      </div>
      <div>
      </div>
      <p>
      </p>
    </div>
  )
}
