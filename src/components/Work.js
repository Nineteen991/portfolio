import { useState } from 'react'

import PBG from './Jobs/PBG'
import KState from './Jobs/KState'
import Army from './Jobs/Army'

export default function Work() {
  const [jobBtn, setJobBtn] = useState([
    {
      name: 'Progressive Benefit Group',
      component: <PBG />,
      active: true
    },
    {
      name: 'K-State University Math Dept',
      component: <KState />,
      active: false
    },
    {
      name: 'US Army',
      component: <Army />,
      active: false
    }
  ])

  const setActive = selectedJob => {
    setJobBtn(prev => (
      prev.map(job => (
        job.name === selectedJob.name 
          ? { ...job, active: true }
          : { ...job, active: false }
      ))
    ))
  }

  const renderActive = () => {
    const selectedJob = jobBtn.filter(job => job.active)
    return selectedJob[0].component
  }
  
  return (
    <div className="work" id="work">
      <h2 className="secondary-titles work-h2">Where I've Been Working</h2>

      <div className="work-container">
        <div className="jobs">
          {
            jobBtn.map((job, index) => (
              <button 
                key={ index }
                className={`job-names ${job.active && 'underline'}`}
                onClick={ () => setActive(job) }
              >
                { job.name }
              </button>
            ))
          }
        </div>

        <div className="job-card">
          <div className="job-desc">
            {
              renderActive()
            }
          </div>
        </div>

      </div>
    </div>
  )
}