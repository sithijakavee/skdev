import React, { useEffect } from 'react'

const Logic = ({setLoading}) => {
    useEffect(() => {
    console.log("rendering")

        setLoading(true)
    }, [])
  return (
    <></>
  )
}

export default Logic