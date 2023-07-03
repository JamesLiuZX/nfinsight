import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { useState } from "react";

const CollectionThumbnail = ({ src, size }: { src: string; size: number }) => {
  const [isError, setIsError] = useState(false);
  return (
    <div className={`w-[${size}px] h-[${size}px] hidden md:block`}>
      <Image
        src={isError ? "/images/collection_fallback.webp" : src}
        alt="Collection Artwork"
        width={size}
        height={size}
        className="rounded-xl border-2 border-accent-foreground object-cover hover:-translate-x-[1px] hover:-translate-y-[1px] hover:border-b-4 hover:border-r-4"
        onError={() => setIsError(true)}
      />
    </div>
  );
};

export default CollectionThumbnail;
