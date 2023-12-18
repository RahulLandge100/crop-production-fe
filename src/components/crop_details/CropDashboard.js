import React, {useEffect, useState} from "react";
import Card from "../UI/Card";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterState from "./FilterState/FilterState";
import PerYearBarChart from "./ChartComponents/PerYearBarChart";
import PerCropBarChart from "./ChartComponents/PerCropBarChart";
import './ChartComponents/Chart.css';

const CropDashboard = (props) => {
    const [filterStateValue, setFilterStateValue] = useState('');
    const [order, setOrder] = useState("ASC");

    let filterCropDetails = props.cropDetails.filter((crop) => {
        if(filterStateValue === 'Andhra Pradesh') {
            return crop.state === 'Andhra Pradesh';
        }
        else if(filterStateValue === 'Maharashtra') {
            return crop.state === 'Maharashtra';
        }
        else if(filterStateValue === 'Uttar Pradesh') {
            return crop.state === 'Uttar Pradesh';
        }
        else if(filterStateValue === 'Assam') {
            return crop.state === 'Assam';
        }
        else {
            return crop;
        }
    })
    
    
    const sorting = (col) => {
        if(order === "ASC") {
            const sorted = [...filterCropDetails].sort((a,b) => 
            {
                if(a[col] > b[col]){
                    return 1;
                } else {
                    return -1;
                }
            }
            );
            for(let i = 0; i < sorted.length; i++) {
                filterCropDetails.push(sorted[i])
            }
            
            setOrder("DSC");
        }

        if(order === "DSC") {
            const sorted = [...filterCropDetails].sort((a,b) => 
                {
                    if(a[col]> b[col]){
                        return 1;
                    } else {
                        return -1;
                    }
                }
            );
            for(let i = 0; i < sorted.length; i++) {
                filterCropDetails.push(sorted[i])
            }
            setOrder("ASC");
        }
    }

    function onFilterValueSelected(filterValue) {
        setFilterStateValue(filterValue);
    }
    
    return(
        <>
        <Card>
            <div>
                <Container>
                    <h1 className="text-center mt-4">Crop Details</h1>
                    <Form>
                        <FilterState filterValueSelected={onFilterValueSelected} />
                    </Form>
                    <div className="chart">
                    <PerYearBarChart fc={filterCropDetails} />
                    <PerCropBarChart fc={filterCropDetails} />
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th onClick={() => sorting("cropName")}>Crop Name</th>
                                <th>State</th>
                                <th>District</th>
                                <th>Area(In Hectare)</th>
                                <th>Production</th>
                                <th onClick={() => sorting("yield")}>Yield</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterCropDetails.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.year}</td>
                                    <td>{item.cropName}</td>
                                    <td>{item.state}</td>
                                    <td>{item.district}</td>
                                    <td>{item.area}</td>
                                    <td>{item.production} {item.productionUnits}</td>
                                    <td>{item.yield}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </Card>
        </>
    );
}

export default CropDashboard;