import React from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Error = () => {
const navigate = useNavigate()

useEffect(()=>{
navigate('/error', {replace: true})
}, [navigate])

return(
	<div>
	<p>This is the Error Page</p>
</div>
	)
}