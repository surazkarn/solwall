export const fetchNews = async () => {
  try {
    const response = await fetch(
      'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&sortOrder=popular'
    );
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    return data.Data.slice(0, 6).map((item: any) => ({
      title: item.title,
      description: item.body.slice(0, 150) + '...',
      url: item.url,
      publishedAt: new Date(item.published_on * 1000).toISOString(),
      urlToImage: item.imageurl
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return []; // Return empty array instead of throwing to prevent UI breaks
  }
};