import CharacterCard from '@/components/CharacterCard';
import PaginationBar from '@/components/PaginationBar';
import Image from 'next/image';

interface CharacterCardData {
  name: string;
  image: string;
  episode: string[];
  status: string;
  species: string;
  gender: string;
  created: string;
  id: string;
}

interface HomeProps {
  searchParams: { page: string };
}

async function getData(page: string) {
  const apiUrl = 'https://rickandmortyapi.com/api/character';
  const res = await fetch(`${apiUrl}?page=${page}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home({
  searchParams: { page = '1' },
}: HomeProps) {
  const currentPage = parseInt(page);
  const {
    results,
    info: { pages },
  } = await getData(page);

  return (
    <div className="flex flex-col items-center">
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {results &&
          results.map((item: CharacterCardData) => (
            <CharacterCard {...item} key={item.id} />
          ))}
      </div>
      {pages && pages > 1 && (
        <PaginationBar currentPage={currentPage} totalPages={pages} />
      )}
    </div>
  );
}
