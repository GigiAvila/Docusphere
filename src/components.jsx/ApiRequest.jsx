import React, { useState, useEffect } from 'react'

const ApiRequest = () => {

  const [randomUser, setRandomUser] = useState();

  useEffect(() => {
    fetch('https://randomuser.me/api/?inc=name,email,login.password')
      .then(response => response.json())
      .then(data => {
        const { name, email, login } = data.results[0];
        setRandomUser({ name, email, password: login.password });
      })
  }, [])



  return (
    <>
    </>
  )
}

export default ApiRequest