import { useState } from 'react'

import PBG from './Jobs/PBG'
import KState from './Jobs/KState'

export default function Work() {
  const [jobBtn, setJobBtn] = useState('PBG')

  return (
    <div className="work" id="work">
      <h2 className="secondary-titles work-h2">Where I've Been Working</h2>

      <div className="work-container">
        <div className="jobs">
          <button 
            className={`job-names ${jobBtn === 'PBG' && 'underline'}`}
            onClick={ () => setJobBtn('PBG') }
          >
            Progressive Benefit Group
          </button>
          <button 
            className={`job-names ${jobBtn === 'KState' && 'underline'}`}
            onClick={ () => setJobBtn('KState') }
          >
            K-State University Math Dept
          </button>
        </div>

        <div className="job-card">
          <div className="job-desc">
            {
              jobBtn === 'PBG'
                ? <PBG />
                : <KState />
            }
          </div>
        </div>

      </div>
    </div>
  )
}