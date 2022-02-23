export const detailsByIdAndType = async (
  args: Api.DetailsByIdAndType.Args,
  abortController?: AbortController
): Promise<Api.DetailsByIdAndType.Response> => {
  const url = `https://pkk.rosreestr.ru/api/features/${args.type}/${
    args.id
  }?_=${Date.now()}`;

  const response = await fetch(url, { signal: abortController?.signal });

  return (await response.json()) as Api.DetailsByIdAndType.Response;
};
