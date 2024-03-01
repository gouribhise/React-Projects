import React from 'react'

const Report=({data})=>{
    return (
        <div className='col-lg-2'>
            <h4>{data.date.slice(5,)}</h4>
            
         <table>
            <tr>
                <th>{data.day.condition.text}</th>
                <td><img src={data.day.condition.icon}/></td>
            </tr>
            <tr>
                <th>UV</th>
                <td>{data.day.uv}</td>
            </tr>
            <tr>
                <th> maxtemp_c </th>
                <td>{data.day.maxtemp_c}</td>
            </tr>
            <tr>
                <th> maxtemp_f</th>
                <td>{data.day.maxtemp_f}</td>
            </tr>
            <tr>
                <th>mintemp_c</th>
                <td>{data.day.mintemp_c}</td>
            </tr>
            <tr>
                <th>mintemp_f</th>
                <td>{data.day.mintemp_f}</td>
            </tr>
            <tr>
                <th>humidity</th>
                <td>{data.day.avghumidity}</td>
            </tr>
            <tr>
                <th> Rain? </th>
                <td> {data.day.daily_will_it_rain}</td>
            </tr>
            <tr>
                <th> Snow?</th>
                <td>{data.day.daily_will_it_snow}</td>
            </tr>
         </table>

<table>
    <tr>
        <th>  Sunrise </th>
        <td>{data.astro.sunrise}</td>
    </tr>
    <tr>
        <th>  Sunset </th>
        <td>{data.astro.sunset}</td>
    </tr>
    <tr>
        <th>  Moonrise </th>
        <td>{data.astro.moonrise}</td>
    </tr>
    <tr>
        <th>  Moonset </th>
        <td>{data.astro.moonset}</td>
    </tr>
</table>
     
   


       
        </div>

    )
}

export default Report