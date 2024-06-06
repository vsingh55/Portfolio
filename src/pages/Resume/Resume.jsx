import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

function Resume() {
  return (
    <section>
        <header>
            <h2 className='h2 article-title'>Resume</h2>
        </header>

        <div className='timeline'>
            <div className='title-wrapper'>
                <div className='icon-box'>
                <MdAccessTimeFilled />
                </div>
                <h3 className='h3'>Experience</h3>
            </div>
            <ol className='timeline-list'>
                <TimelineItem title="Technical Writer @Hashnode, India"
                date = "July 2023 - Present" 
                description={
                    <>
                        <p>🔹 Translating complex concepts into clear, engaging documentation.</p>
                        <p>🔹 Crafting well-received technical blogs and guides, talks about Specializing in Azure, Linux, Networking, DevOps, etc.</p>
                        <p>🔹 Creating comprehensive series for Linux and Networking.</p>
                    </>
                }
                />

                <TimelineItem title="IT Support Consultant"
                date = "Aug 2016 - July 2019" 
                description ={
                    <>
                        <p>🔹 I’ve successfully assisted 100+ services in troubleshooting software, hardware, and network issues, ensuring seamless and efficient operations. </p>
                        <p>🔹 Conducted on-site and remote support sessions for diverse clients, addressing hardware malfunctions, resolving software glitches, and optimizing network connectivity. </p>
                        <p>🔹 Advised on optimal software and hardware solutions, enhancing performance and implementing cost-effective technology solutions for 50+ clients. </p>
                        <p>🔹 Utilized remote assistance tools such as AnyDesk and TeamViewer to streamline troubleshooting processes minimizing downtime and maximizing productivity.</p>
                        <p>🔹 Diagnosed and resolved operating system, application, and utility issues in software troubleshooting. </p>
                        <p>🔹 Identified and resolved hardware malfunctions, recommended upgrades, and ensured optimal device performance in hardware support.</p>
                    </>
                }
                />
            </ol>
        </div>

        <div className='timeline'>
            <div className='title-wrapper'>
                <div className='icon-box'>
                <FaBookOpen />
                </div>
                <h3 className='h3'>Education</h3>
            </div>
            <ol className='timeline-list'>
                <TimelineItem title="Google IT Support Professional Certificate"
                date = "Sept 2023 - Jan 2024" 
                description = {
                    <>
                        <p>🔹 Skills acquired: </p>
                            <p>✅ Troubleshooting and customer service </p>
                            <p>✅ Networking fundamentals </p>
                            <p>✅ Operating systems (Windows and Linux) </p>
                            <p>✅ System administration </p>
                            <p>✅ IT infrastructure services </p>
                            <p>✅ Automation using Bash scripting</p>
                            <p>✅ Security troubleshooting"</p>
                    </>
                } 
                />

                <TimelineItem title="M.Tech in Renewal Energy Systems @NIT Kurukshetra, India"
                date = "Aug 2019 - Oct 2021" 
                description = {
                    <>
                        <p>🔹 Skills acquired: </p>
                            <p>✅ Application of Artificial Neural Network </p>
                            <p>✅ Research and Development (R&D) </p>
                            <p>✅ Technical Writing </p>
                            <p>✅ Analytical Skills </p>
                            <p>✅ Problem Solving</p>
                            <p>✅ Written Communication </p>
                    </>
                } />

                <TimelineItem title="B.Tech in Electrical and Electronics Engineering @Uttarakhand Technical University, India"
                date = "Aug 2012 - Oct 2016" 
                description = {
                    <>
                        <p>🔹 Skills acquired: </p>
                            <p>✅ Team Collaboration </p>
                            <p>✅ Project Management</p>
                            <p>✅ Volunteering Skills </p>
                            <p>✅ Problem Solving</p>
                            <p>✅ Window Troubleshooting </p>
                            <p>✅ Effective Communication"</p>
                    </>
                } />
            </ol>
        </div>


        <div className='Skills'>
            <h3 className='h3 skills-title'>Skills</h3>
            <ul className='skills-list content-card'>
                <SkillItem title="Azure"  value={90} />
                <SkillItem title="Google Cloud Plateform"  value={70} />
                <SkillItem title="AWS"  value={50} />
                <SkillItem title="Azure DevOps"  value={50} />
                <SkillItem title="CI?CD"  value={60} />
                <SkillItem title="Terraform"  value={80} />
                <SkillItem title="Linux"  value={90} />
                <SkillItem title="Git"  value={90} />
                <SkillItem title="Docker"  value={75} />
                <SkillItem title="Kubernates"  value={75} />
                <SkillItem title="Jenkins"  value={30} />
                <SkillItem title="Ansible"  value={10} />
                <SkillItem title="Networking"  value={90} />
                <SkillItem title="System Adminstration"  value={80} />
                <SkillItem title="Technical Support"  value={80} />
            </ul>
        </div>

        <div className='skill'>
            <h3 className='h3 skills-title'>Programming Skills</h3>
            <ul className='skills-list content-card'>
                <SkillItem title="Bash"  value={70} />
                <SkillItem title="PowerShell"  value={50} />
                <SkillItem title="Python"  value={60} />
                <SkillItem title="JSON"  value={60} />
                <SkillItem title="html"  value={80} />
            </ul>
        </div>
    </section>
  )
}

export default Resume
