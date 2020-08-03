import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'

function Main() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    getCovidData(country)
  }, [getCovidData, country])

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  return (
    <>
      <ContainerStyled>
        <div className="mb-2">
          <Panel
            data={data}
            updateAt={updateAt}
            onChange={handleChange}
            country={country}
            getCovidData={getCovidData}
          />
        </div>
        <Board data={data} />
        <footer>
          <h3> Projeto retirado do repositório de tautorn para a DIO e adaptado por Yann</h3>
          <p>LinkedIN -> <a href="https://www.linkedin.com/in/yann-silveira/" target="blank">https://www.linkedin.com/in/yann-silveira/</a></p>
          <p>GitHub -> <a href="https://github.com/Yannops" target="blank">https://github.com/Yannops</a></p>
          <p>Repositório do projeto original -> <a href="https://github.com/Tautorn/covid19-dio" target="blank">https://github.com/Tautorn/covid19-dio</a></p>
        </footer>
      </ContainerStyled>
    </>
  )
}

export default memo(Main)
