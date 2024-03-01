import React,{useState} from 'react'

const Report=({data})=>{
    const[dayVisible,setDayVisible]=useState(false)
const[astroVisible,setAstroVisible]=useState(false)
    return (
        <div className='col-lg-2'>
          
            <h4>{data.date.slice(5,)}</h4>
            <div className='row'>
                <div className="container">
                <button onClick={()=>setDayVisible(!dayVisible)} type='button'   className="btn btn-primary btn-block">Day</button>                
                </div>
            </div>
            

{dayVisible?   <table>
            <tr>
                <th>{data.day.condition.text}</th>
                <td><img src={data.day.condition.icon}/></td>
            </tr>
            <tr>
                <th>UV</th>
                <td>{data.day.uv}</td>
            </tr>
       
            <tr>
                <th>  Max C </th>
                <td>{data.day.maxtemp_c}</td>
            </tr>
            <tr>
                <th>Min C</th>
                <td>{data.day.mintemp_c}</td>
            </tr>
            <tr>
                <th> Max F</th>
                <td>{data.day.maxtemp_f}</td>
            </tr>
         
            <tr>
                <th>Min F</th>
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

:null}
   <div className='row py-2'>
    <div className='contaienr'>
                <button onClick={()=>setAstroVisible(!astroVisible)} type="button" class="btn btn-primary btn-block">Astro</button>
             
                </div>
            </div>
{astroVisible?
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
</table>:null}
     
   


       
        </div>

    )
}

export default Report