import { InfoWMSTileLayer } from 'react-leaflet-infowms'
import { MapContainer, TileLayer } from 'react-leaflet'
import PropTypes from 'prop-types'
import 'leaflet/dist/leaflet.css'

const position = [57.76, 11.96]

function Map({ features }) {

  function wmsInfo(e) {
    console.log(e)
    fetch(e.url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        features(response.features)
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
        eventHandlers={{ click: (e) => wmsInfo(e) }}
      />
    </MapContainer>
  )
}

Map.propTypes = {
  features: PropTypes.func,
}

export default Map
