import React from 'react'

const Report=({data})=>{
    return (
        <div className='col-lg-2'>
            <h4>{data.date}</h4>
            
            <strong>{data.day.condition.text} <span><img src={data.day.condition.icon}/></span></strong> 
            <p>UV{data.day.uv}</p>
           <p> maxtemp_c{data.day.maxtemp_c}  maxtemp_f{data.day.maxtemp_f}</p>
           <p>mintemp_c{data.day.mintemp_c}  mintemp_f{data.day.mintemp_f}</p>
           <p>humidity{data.day.avghumidity}</p>
           Rain? {data.day.daily_will_it_rain} 
       <p> Snow?{data.day.daily_will_it_snow}</p>

       <p>Sunrise {data.astro.sunrise}</p>
       <p>Sunset {data.astro.sunset}</p>
       <p>Moonrise {data.astro.moonrise}</p>
       <p>Moonset {data.astro.moonset}</p>


       
        </div>

    )
}

export default Report