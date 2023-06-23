declare module 'leaflet-infowms' {
  export namespace TileLayer {
    class InfoWMS extends L.TileLayer {
      constructor(baseUrl: string, options: InfoWMSOptions)
      setParams(params: WMSParams, noRedraw?: boolean): this

      wmsParams: WMSParams
    }
  }

  import { CRS } from 'leaflet'
  export interface InfoWMSOptions {
    url?: string
    layers?: string | undefined
    styles?: string | undefined
    format?: string | undefined
    transparent?: boolean | undefined
    version?: string | undefined
    crs?: CRS | undefined
    uppercase?: boolean | undefined
  }

  export interface WMSParams {
    format?: string | undefined
    layers?: string | undefined
    request?: string | undefined
    service?: string | undefined
    styles?: string | undefined
    version?: string | undefined
    transparent?: boolean | undefined
    width?: number | undefined
    height?: number | undefined
  }

  export namespace tileLayer {
    function wms(baseUrl: string, options?: InfoWMSOptions): TileLayer.InfoWMS
  }
}
