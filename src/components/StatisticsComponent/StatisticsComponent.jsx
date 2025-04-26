import './StatisticsComponent.css'

const StatisticsComponent = ({statistics}) => {
  return (
    <div className='statistics-card border-grey-2'>
          {
            statistics.map((field,index) => (
              <div key={index} className='statistic-card'> 
                <p className='fs-44 num'>
                  {field.num}
                </p>
                <p className='fs-18 desc'>
                  {field.about}
                </p>
              </div>
            ))
          }
    </div>
  )
}

export default StatisticsComponent