import React, { useEffect, useState } from 'react'
import Service from './Service';
import Testimonial from './Testimonial';


const servicesData = 
[
    {
      "title": "DevOps Engineer",
      "icon": "/images/icon-dev.svg",
      "description": "I am leaning jenkins, ansible and Grafana tools to improve the quality of delivery and speed to acheive CI/CD, ensuring seamless code integration, automated testing, visualizing, monitoring data and frequent deployments."
    },
    {
      "title": "Cloud Engineer",
      "icon": "/images/icon-dev.svg",
      "description": "I am enjoying cutting-edge cloud technologies to manage infrastructure, optimize performance, ensure robust security and compliance, seamlessly deploy applications, continually optimize costs, collaborate cross-functionally, and relentlessly upskill to stay ahead of the evolving cloud technologies."
    },
    {
      "title": "Cloud DevOps Engineer",
      "icon": "/images/icon-dev.svg",
      "description": "Exploring GitLabs, GitOps, Azure DevOps "
    },
  ];


function About() {

  const [testimonial, setTestimonials] = useState([]);
  useEffect(()=>{
    fetch('/testimonials.json').then(res => res.json()).then(data=>{
      setTestimonials(data);
    })
  });

  return (
    <div className='about'>
      <header>
        <h2 className='h2 article-title'>About Me</h2>
      </header>
      <section className='about-text'>
        <p>
        Hello! I'm Vijay Kumar Singh, my professional roots are planted in the rich soil of Electrical and Electronics Engineering, a domain where precision meets practicality. Yet, my aspirations stretch far beyond, driven by a profound curiosity and an unwavering adaptability. <br></br>
        Today, I stand at a thrilling crossroads, transitioning into the vast and dynamic world of Information Technology. This transition is fueled by an insatiable passion for technology and a relentless pursuit of knowledge. With each step forward, I embrace the challenges and opportunities that come with adapting to a new industry, powered by my analytical skills and a commitment to excel in IT's ever-evolving landscape. As I continue this journey, my enthusiasm grows stronger each day. In this realm where voltage meets the virtual, "VoltageToVirtual" has become a testament to my transformation - from the tangible threads of electrical currents to the vast, explorative virtual clouds of IT. <br></br>
        A passionate and skilled DevOps and Cloud Engineer with a strong background in infrastructure provisioning, automation, networking and monitoring.  <br></br>
        Have experience working with tools such as Jenkins, Terraform to streamline development processes and ensure efficient code deployment. Proficient in managing and monitoring cloud infrastructure services on Azure and GCP, as well as maintaining high availability in Kubernetes-based container clusters. Successfully implemented Containerizing applications with Docker, Setting up CI/CD pipelines using Jenkins, Conducting static code analysis and vulnerability scanning using Trvy,Deploying applications to Azure Kubernetes Service (AKS).  My expertise also includes integrating, automation and  testing into the CI/CD pipeline and developing scripts to automate tasks, improving efficiency and reducing manual effort.
        </p>
      </section>

      <section className='services'>
        <h2 className=' h3 service-title'>
          What I'm Doing
        </h2>
        <ul className='service-list'>
          {
            servicesData.map((service,index)=>(
              <Service key={index} title={service.title} icon = {service.icon} description={service.description} />
            ))
          }
        </ul>
      </section>


      {/* <section className='testimonials'>
          <h3 className='h3 testimonials-title'>Testimonials</h3>
          <ul className='testimonials-list has-scrollbar'>
            {
              testimonial.map((testimonial , index) =>(
                <Testimonial 
                key={index} 
                name={testimonial.name} 
                avatar = {testimonial.avatar} 
                testimonial ={testimonial.testimonial} />
              ))
            }
          </ul>
      </section> */}


      <section className='clients'>
        <h3 className='h3 clients-title'>Clients</h3>
            <ul className=' clients-list has-scrollbar'>
              {/* <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-1-color.png' alt='nnnn'/>
                </a>
              </li>
              <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-4-color.png' alt='nnnn'/>
                </a>
              </li>
              <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-3-color.png' alt='nnnn'/>
                </a>
              </li>
              <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-2-color.png' alt='nnnn'/>
                </a>
              </li>
              <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-5-color.png' alt='nnnn'/>
                </a>
              </li>
              <li className='clients-item'>
                <a href='#'>
                  <img src='/images/logo-6-color.png' alt='nnnn'/>
                </a>
              </li> */}
                <p className='about-text'>No Clients</p>
            </ul>
      </section>
       
    </div>
  )
}

export default About;