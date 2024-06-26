import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { geoFeatures } from '../Constants/map_json'
const MapChart = () => {
  const geoData = [
    { id: 'AFG', value: 100 }, // Afghanistan
    { id: 'ALB', value: 200 }, // Albania
    { id: 'DZA', value: 300 } // Algeria
    // Add more countries or regions as needed
  ]
  return (
    <ResponsiveChoropleth
      data={geoData}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor='#666666'
      label='properties.name'
      valueFormat='.2s'
      projectionScale={50}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor='#dddddd'
      borderWidth={0.5}
      borderColor='#152538'
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        },
        {
          id: 'gradient',
          type: 'linearGradient',
          colors: [
            {
              offset: 0,
              color: '#000'
            },
            {
              offset: 100,
              color: 'inherit'
            }
          ]
        }
      ]}
      fill={[
        {
          match: {
            id: 'CAN'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'CHN'
          },
          id: 'lines'
        },
        {
          match: {
            id: 'ATA'
          },
          id: 'gradient'
        }
      ]}
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemTextColor: '#444444',
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  )
}

export default MapChart
