// if you don't know what the data is going to be coming from the API you use generics like T; some type T
// get data is going to receive some type T, this type T will be returned from this function inside of a promise
// T - the starting type
export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};
