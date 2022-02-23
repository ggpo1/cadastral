export const searchByCoordinates = async (
  args: Api.SearchByCoordinates.Args,
  abortController?: AbortController
) => {
  const url = `https://pkk.rosreestr.ru/api/features/5?_=${Date.now()}&text=${
    args.latitude
  }+${args.longitude}&limit=40&skip=0&inPoint=true&tolerance=1`;

  const queryResponse = await fetch(url, { signal: abortController?.signal });

  return (await queryResponse.json()) as Api.SearchByCoordinates.Response;
};
