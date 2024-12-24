import { FC } from 'react';
import { ExternalLink } from 'lucide-react';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  urlToImage?: string;
}

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard: FC<NewsCardProps> = ({ news }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <a
      href={news.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      {news.urlToImage && (
        <img
          src={news.urlToImage}
          alt={news.title}
          className="w-full h-48 object-cover rounded-t-lg"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {news.description}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{formatDate(news.publishedAt)}</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
};