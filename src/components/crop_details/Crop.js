import React, {useEffect, useState, useCallback} from "react";
import CropDashboard from "./CropDashboard";

const Crop = () => {
    const [cropDetails, setCropDetails] = useState([]);

    const fetchCropDetails = useCallback(async () => {
        const BASE_URL = "http://localhost:8080/crop/get-all-crops";

        try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            let loadedData = [];
            loadedData = Object.values(data);
            setCropDetails(loadedData);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchCropDetails();
    },[]);

    return(
        <>
            <CropDashboard cropDetails = {cropDetails} />
        </>
    );
}

export default Crop;
