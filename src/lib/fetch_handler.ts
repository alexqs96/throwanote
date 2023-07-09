/**
 * Handles HTTP GET requests
 * Makes a GET request to the specified URL and returns the response as an object
 * If an error occurs, it returns the safeResponse parameter
 * 
 * @param url - The URL to fetch using the GET method
 * @param query - The queries to apply to the request
 * @param safeResponse - The response to be returned in case of an error
 * @returns The response object or the safeResponse
 */

export async function fetchHandler<T>(url: string, query: {}, safeResponse: T): Promise<T> {
  try {
    return await fetch(
      url + new URLSearchParams({
        ...query
      }),
      {
        cache: "no-store",
      },
    )
      .then((res) => {    
        return res.json();
      })
      .catch((err) => {
        return safeResponse;
      });
  } catch (error) {
    return safeResponse;
  }
}

export async function postHandler<T>(url: string, body: T, safeResponse: T): Promise<T> {
  try {
    return await fetch(
      url,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }
    )
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        return safeResponse;
      });
  } catch (error) {
    return safeResponse;
  }
}