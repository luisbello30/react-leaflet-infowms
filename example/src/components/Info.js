import PropTypes from 'prop-types'

function Info({ features }) {
  return (
    <table>
      <thead>
        <tr>
          {features[0] &&
            Object.keys(features[0].properties)
              .map((value, index) => (
                <th key={index}>{value}</th>
              ))}
        </tr>
      </thead>
      <tbody>
        {features.map((value, index) => (
          <tr key={index}>
            {Object.values(value.properties)
              .map((value, index) => (
                <td key={index}>{value}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </table >
  )
}
Info.propTypes = {
  features: PropTypes.array,
}

export default Info