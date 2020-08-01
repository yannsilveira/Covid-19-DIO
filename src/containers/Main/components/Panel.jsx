import React, { memo } from 'react'
import { Card, Typography, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <div className="divCard">
            <Typography variant="h5" component="span" color="primary">COVID 19</Typography>
            <Typography className="secondCardTypography" variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
          </div>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
      </CardPanelContentStyled>
    </Card>
  )
}

export default memo(Panel)