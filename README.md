# react-leaflet-infowms

You can create a URL with "GetFeatureInfo" WMS request data about a map image coordinate and get it from the click event

## Requirement

- [Lealfet](https://leafletjs.com/)
- [react-leaflet-v3](https://react-leaflet.js.org/docs/v3/start-introduction/)

## Leaflet Versión

Test on leaflet 1.7.1

## Demo

[Demo](https://luisbello30.github.io/react-leaflet-infowms/)

## Installing

```bash
npm install leaflet-infowms
```

or using Yarn

```bash
yarn add leaflet-infowms
```

## Getting started

```jsx
import { InfoWMSTileLayer } from 'react-leaflet-infowms'
import { MapContainer, TileLayer } from 'react-leaflet'
import PropTypes from 'prop-types'
import 'leaflet/dist/leaflet.css'

const position = [57.76, 11.96]

function Map() {
  function wmsInfo(event) {
    console.log(event)
    fetch(event.url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <MapContainer center={position} zoom={13} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <InfoWMSTileLayer
        url='https://public-mapservice.lf.goteborg.se/geoserver/LF_Externwebb/wms?'
        params={{
          layers: 'Utrustning',
          format: 'image/png',
          transparent: true,
          attribution: 'Public Geoserver LF Goteborg City',
          feature_count: 1,
        }}
        eventHandlers={{ click: (event) => wmsInfo(event) }}
      />
    </MapContainer>
  )
}

Map.propTypes = {
  features: PropTypes.func,
}

export default Map
```

## API reference

TODO
