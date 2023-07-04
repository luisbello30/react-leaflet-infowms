import { TileLayer, WMSParams } from 'leaflet-infowms'
import {
  createTileLayerComponent,
  LayerProps,
  LeafletContextInterface,
  updateGridLayer,
} from '@react-leaflet/core'
import { LeafletEventHandlerFnMap, TileLayerOptions } from 'leaflet'

interface wmsLayerProps extends TileLayerOptions {
  url: string
  params: WMSParams
  eventHandlers?: LeafletEventHandlerFnMap
}

function createInfoWMSTileLayer(props: wmsLayerProps, context: LeafletContextInterface) {
  const instance = new TileLayer.InfoWMS(props.url, props.params)
  return {
    instance,
    context,
  }
}

function updateInfoWMSTileLayer(
  layer: TileLayer.InfoWMS,
  props: LayerProps,
  prevProps: LayerProps,
) {
  updateGridLayer(layer, props, prevProps)
}

const InfoWMSTileLayer = createTileLayerComponent(createInfoWMSTileLayer, updateInfoWMSTileLayer)

export { InfoWMSTileLayer }
