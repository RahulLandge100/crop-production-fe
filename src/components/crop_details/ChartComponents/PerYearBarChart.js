import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';


const PerYearBarChart = (props) => {
  const [year, setYear] = useState([]);
  const [production, setProduction] = useState([]);

  const years = [];
  const productions = [];

  var output = [];

  props.fc.forEach(function(item) {
  var existing = output.filter(function(v, i) {
    return v.year == item.year;
  });
  if (existing.length) {
    var existingIndex = output.indexOf(existing[0]);
    output[existingIndex].production = output[existingIndex].production + (item.production);
  } 
  else {
    if (typeof item.production == 'int')
      item.production = [item.production];
    output.push(item);
  }
});

for(let i = 0; i < output.length; i++) {
    
  years.push(output[i].year)
  productions.push(output[i].production)
}

  useEffect(() => {
    setYear(years);
    setProduction(productions);
  },[props.fc])

  return (
        <>
        <Chart
        type='bar'
        width={500}
        height={500}

        series={[
          {
            name:"Production Per Year",
            data:production
          }
        ]}

        options={{
          title:{text:"Production Per Year",
          style:{fontSize:30}
        },
        colors:['#f90000'],
        theme:{mode:'light'},

        xaxis:{
          categories:year
        }

        }}
        >
        </Chart>
      </>
  )
}

export default PerYearBarChart;