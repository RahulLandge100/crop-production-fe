import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const PerCropBarChart = (props) => {
    const [crop, setCrop] = useState([]);
    const [production, setProduction] = useState([]);

    const crops = [];
    const productions = [];

    var output = [];

  props.fc.forEach(function(item) {
  var existing = output.filter(function(v, i) {
    return v.cropName == item.cropName;
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
    
  crops.push(output[i].cropName)
  productions.push(output[i].production)
}

      useEffect(() => {
        setCrop(crops);
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
                name:"Production Per Crop",
                data:production
            }
            ]}

            options={{
            title:{text:"Production Per Crop",
            style:{fontSize:30}
            },
            colors:['#f90000'],
            theme:{mode:'light'},

            xaxis:{
            categories:crop
            }

            }}
            >
            </Chart>
        </>
    )
}

export default PerCropBarChart;