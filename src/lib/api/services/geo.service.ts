export class GeoApi {
  async getGeoData(
    longitude: number,
    latitude: number,
  ): Promise<{
    oneLineAddress: string;
  }> {
    const url = 'https://cadmus-bv1ef.api-bridge.work';
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          handler: 'geo-data',
          payload: {
            longitude,
            latitude,
          },
        }),
      });
      const long = longitude.toFixed(4);
      const lat = latitude.toFixed(4);
      let oneLineAddress = '';
      const cachedKey = `__geo_data_${long}_${lat}`.replaceAll('.', '_');
      if (localStorage.getItem(cachedKey)) {
        console.log('get from cache:', cachedKey);
        oneLineAddress = JSON.parse(localStorage.getItem(cachedKey) ?? '{}') as string;
      } else {
        const data = (await response.json()) as unknown as {
          oneLineAddress: string;
        };
        oneLineAddress = data.oneLineAddress;
        localStorage.setItem(cachedKey, JSON.stringify(oneLineAddress));
      }
      return {
        oneLineAddress: oneLineAddress ?? '',
      };
    } catch (error) {
      return {
        oneLineAddress: '',
      }
    }
  }
}

export const geoApi = new GeoApi();
