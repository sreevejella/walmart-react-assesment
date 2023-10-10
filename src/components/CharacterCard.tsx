import Image from 'next/image';

interface CharacterCardProps {
  name: string;
  image: string;
}

function CharacterCard({ name, image }: CharacterCardProps) {
  return (
    <div className="card card-side bg-base-100 w-full transition-shadow hover:shadow-xl">
      <div className="avatar">
        <div className="w-48 rounded-xl">
          <figure>
            <Image
              src={image}
              alt={name}
              width={300}
              height={300}
              className="h-48 object-cover"
            />
          </figure>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
}

export default CharacterCard;
