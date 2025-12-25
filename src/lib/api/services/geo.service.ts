export class GeoApi {
  async getGeoData(
    longitude: number,
    latitude: number,
  ): Promise<{
    oneLineAddress: string;
  }> {
    const long = longitude.toFixed(4);
    const lat = latitude.toFixed(4);
    const cachedKey = `__geo_data_${long}_${lat}`.replaceAll('.', '_');
    if (localStorage.getItem(cachedKey)) {
      try {
        console.log('get from cache:', cachedKey);
        const data = JSON.parse(localStorage.getItem(cachedKey) ?? '{}') as {
          oneLineAddress: string;
        };
        if (data?.oneLineAddress) {
          return { oneLineAddress: data.oneLineAddress };
        }
      } catch (error) {
        return {
          oneLineAddress: '',
        };
      }
    }

    try {
      const url = 'https://cadmus-bv1ef.api-bridge.work';
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
      const data = (await response.json()) as unknown as {
        oneLineAddress: string;
      };
      oneLineAddress = data.oneLineAddress;
      localStorage.setItem(cachedKey, JSON.stringify({ oneLineAddress }));
      return {
        oneLineAddress: oneLineAddress ?? '',
      };
    } catch (error) {
      return {
        oneLineAddress: '',
      };
    }
  }
}

export const geoApi = new GeoApi();
