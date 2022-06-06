import { Button } from '@nextui-org/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  let i = 0
  var txt = ""
  var speed = 1000;

const typeWriter = async () =>{
    if(i<txt.length){
      document.getElementById("descContent").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }

  }
  typeWriter(); 
  
  return (
  
    <div className="container-fluid">
      <div className="fixed-back">
  
        <a href="#" uk-totop uk-scroll>/\</a>
      </div>
      <div id='homeComponent' className={styles.container}>
        <div className="container-fluid text-white">
          <div className="row justify-content-around">
            <section className='col-11 section headerSectionOne'>
              {/* <img src="/twocircles.svg" className='twoCircles' alt="" /> */}
                <div className='basicDescr'>
                  <p>Hello, I am </p>
                  <h2>I am Aime Cyuzuzo,</h2>
                  <h1 id='basicDesc'><span></span> <br /> a web designer and web developer developer.</h1>
                  {/* <p className="borderSorround">Email Me</p> */}
                  <p className='text-gray-500' id='descContent'>
                  I am a web designer and a web developer focusing on using latest tools on market to develop cool-functioning websites. <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quas totam atque vitae, natus suscipit adipisci reprehenderit, minima at ipsam distinctio ducimus dignissimos blanditiis velit esse a temporibus, cupiditate amet!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, fugiat rerum? Nihil, quod. Sit quas facilis cumque nisi architecto totam id voluptate maiores autem, voluptatum dignissimos maxime odio saepe! Totam?  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ad alias sit nobis suscipit, saepe minus, obcaecati impedit unde deleniti, est ducimus ab autem vero veniam corrupti vitae eligendi. Molestias?
                  </p>

                <div>
                  
                </div>
              </div>
            </section>
          </div>
          <a href="https://app.daily.dev/AimeCyuz" target="_blank" rel="noreferrer"><img src="https://api.daily.dev/devcards/b3122187225c4ea7b725e11cb4846b4d.png?r=ksv" width="400" alt="Dev Card of Cyuzuzo Aime"/></a>

          <div className="container-fluid pt-5">
            <h2 className='underline decoration-wavy'>What I can use...</h2>
            <div className="container-fluid">
              <div className="row p-0 justify-content-around">
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-usable" uk-scrollspy="cls: uk-animation-slide-right;delay: 0; repeat: true">
                  <div className="container-fluid">
                    <div className="row p-0">
                      <div className="col-12 lan-field">
                        HTML
                      </div>
                      <div className="col-12">
                        Hyper Text Markup Language is used to manage content in the website. Usually, it&apos;s the basic language for web development
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-usable" uk-scrollspy="cls: uk-animation-slide-left;delay: 500; repeat: true">
                  <div className="container-fluid">
                    <div className="row p-0">
                      <div className="col-12 lan-field">
                        CSS
                      </div>
                      <div className="col-12">
                        Cascading Style Sheet is used to style HTML content to make it look professional
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-usable" uk-scrollspy="cls: uk-animation-slide-left;delay: 700; repeat: true">
                  <div className="container-fluid">
                    <div className="row p-0">
                      <div className="col-12 lan-field">
                        Javascript
                      </div>
                      <div className="col-12">
                        Javascript is the basic web development scripting language, used to make a web look more user friendly
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-usable" uk-scrollspy="cls: uk-animation-slide-right;delay: 1000; repeat: true">
                  <div className="container-fluid">
                    <div className="row p-0">
                      <div className="col-12 lan-field">
                        Bootstrap
                      </div>
                      <div className="col-12">
                        Bootstrap is a CSS framework that makes it easier to style a web, without struggling to style much
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-usable" uk-scrollspy="cls: uk-animation-slide-right;delay: 1200; repeat: true">
                  <div className="container-fluid">
                    <div className="row p-0">
                      <div className="col-12 lan-field">
                        TailwindCss
                      </div>
                      <div className="col-12">
                        TailwindCss is another CSS framework, but a bit expanded
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-usable" uk-scrollspy="cls: uk-animation-slide-left;delay: 1500; repeat: true">
                  <div className="container-fluid">
                    <div className="row p-0">
                      <div className="col-12 lan-field">
                        React.js
                      </div>
                      <div className="col-12">
                        React.js is a Javascript framework that is used to easily make UIs
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-usable" uk-scrollspy="cls: uk-animation-slide-left;delay: 1800; repeat: true">
                  <div className="container-fluid">
                    <div className="row p-0">
                      <div className="col-12 lan-field">
                        MUI &amp; MUI Icons
                      </div>
                      <div className="col-12">
                        MUI is a React UI library that provides pre-made components ready for job
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <div className="my-projects" uk-scrollspy="cls: uk-animation-fade; target: .single-project; delay: 1000; repeat: true">
            <h2>Here are some of the projects I&apos;ve been working on:</h2>
            <div className="container-fluid">
              <div className="row p-0 justify-content-around">
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-project">
                  <div className="container-fluid p-0">
                    <a href="https://street-bridge-foundation.vercel.app" target="_blank" rel="noreferrer">
                      <div className="row p-0">
                        <div className="col-12">
                          <img src="/sample.jpg" width="100%" height="100%" alt="Project Preview" className="project-preview" />
                        </div>
                        <div className="col-12">
                          <h5>Street Bridge Foundation</h5>
                          <p>
                            Street Bridge Foundation is a youth-led society that aims at helping people in need.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-project">
                  <div className="container-fluid p-0">
                    <a href="https://street-bridge-foundation.vercel.app" target="_blank" rel="noreferrer">
                      <div className="row p-0">
                        <div className="col-12">
                          <img src="/sample.jpg" width="100%" height="100%" alt="Project Preview" className="project-preview" />
                        </div>
                        <div className="col-12">
                          <h5>React + Firebase To Do App</h5>
                          <p>
                            A simple to do app that I made using React.js, Firebase, and MUI Icons
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-project">
                  <div className="container-fluid p-0">
                    <a href="https://ca5-web-piano.netlify.app" target="_blank" rel="noreferrer">
                      <div className="row p-0">
                        <div className="col-12">
                          <img src="/sample.jpg" width="100%" height="100%" alt="Project Preview" className="project-preview" />
                        </div>
                        <div className="col-12">
                          <h5>Simple web piano</h5>
                          <p>
                            A simple web based piano that I made using vanilla(pure) Javascript
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-11 col-11 single-project">
                  <div className="container-fluid p-0">
                    <a href="https://ca5-web-piano.netlify.app" target="_blank" rel="noreferrer">
                      <div className="row p-0">
                        <div className="col-12">
                          <img src="/sample.jpg" width="100%" height="100%" alt="Project Preview" className="project-preview" />
                        </div>
                        <div className="col-12">
                          <h5>Simple web piano</h5>
                          <p>
                            A simple web based piano that I made using vanilla(pure) Javascript
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="email-form-container" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true">
      <div className="email-form">
        <h2>Direct contact</h2>
        <small><i>It would be my pleasure to here from you...</i></small>
        <div>
          <div className="names">
            <label htmlFor="names">Names</label>
            <input type="text" id='names'/>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" id='email'/>
          </div>
          <div className="reference">
            <label htmlFor="subject">Reference / Subject</label>
            <input type="text" id='subject'/>
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea name="" id="message" cols="10" rows="7"></textarea>
          </div>
          <div className="send">
            <Button>Send</Button>
          </div>
        </div>
      </div>
      </div>
      <div>
      </div>
      <p>
      </p>
    </div>
  )
}
