import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LlamadaApi({ table }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const cachedData = localStorage.getItem('associationsData');
            if (cachedData) {
                setData(JSON.parse(cachedData));
                setLoading(false);
            } else {
                try {
                    const response = await axios.get(`https://yeray.informaticamajada.es/api/${table}`);
                    localStorage.setItem('associationsData', JSON.stringify(response.data));
                    setData(response.data);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [table]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        console.log(localStorage.getItem('associationsData'))
    );
};
