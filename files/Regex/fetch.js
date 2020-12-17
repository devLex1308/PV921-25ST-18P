

export async function sendRequest(
  sourceUrl,
  method,
  headers,
  payload = null,
  fetchParams = {},
  disableCache = false,
  env = 'default',
) {

  try {
    let url = `${DOMAIN}/${VERSION}/${sourceUrl}`;

    console.log('url', url);
    const response = await fetch(url, {
      method 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'omit',
      // ...(payload && method !== 'GET' ? {body: JSON.stringify(payload)} : {}),
    });
    return response;
  } catch (e) {
    console.log(`request ${sourceUrl} error =>`, e); // TODO write in another way
    return {};
  }
}
