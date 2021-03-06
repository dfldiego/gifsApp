export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=JPAoszUojPTelaiPfzwF1uMMcYd4GnSJ`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => {
    const { id, title, images } = gif;
    return {
      id,
      title,
      url: images?.downsized_medium.url,
    };
  });
  return gifs;
};
