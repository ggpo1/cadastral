export const searchByTitle = async (
  args: Api.SearchByTitle.Args,
  abortController?: AbortController
): Promise<Api.SearchByTitle.Response> => {
  const url = `https://pkk.rosreestr.ru/api/features/5?_=${Date.now()}&text=${args}&limit=40&skip=0&tolerance=1`;

  const response = await fetch(url, { signal: abortController?.signal });

  const data = (await response.json()) as Api.SearchByTitle.Response;

  return data;
};
