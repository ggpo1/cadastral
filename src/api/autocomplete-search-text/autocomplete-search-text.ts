export const autocompleteSearchText = async (
  args: Api.AutocompleteSearchText.Args,
  abortController?: AbortController
): Promise<Api.AutocompleteSearchText.Response> => {
  try {
    const url = `https://pkk.rosreestr.ru/api/typeahead/5?text=${args}&_=${Date.now()}`;

    const response = await fetch(url, { signal: abortController?.signal });

    const data = (await response.json()) as Api.AutocompleteSearchText.Response;

    return data;
  } catch (err) {
    return { results: [] };
  }
};
