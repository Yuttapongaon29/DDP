import React from 'react';
import DiversityAreaChart from './../../charts/downtown_diversity';
import DataBar from './../../charts/data_bar';


const Diversity = () => {
    return (
        <div>
          <h1 className="sub-sub-heading__purple" data-story-id="2" data-story-overlay="Diversity Index"> <span className='ul-yellow-color'>II.</span>Downtown Demographics</h1>
            <p className='main-text__black'>Downtown Detroit is welcoming to all people, regardless of race, religion, age, sexual orientation or belief or nationality. The Downtown Detroit Partnership strives to make sure that all people feel included and that all voices are heard. </p>
            <div>
              <span className="chart-header">Downtown Detroit Residents, by Race and Ethnicity </span>
                <div className="chart-container">
                    <DiversityAreaChart className={'chart'}/>
                    <DataBar/>
                </div>

            </div>


        </div>

    );
};

export default Diversity;