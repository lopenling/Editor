interface AvatarType {
  title: string;
  alt: string;
  img: string;
  rounded: boolean;
  size: 'sm' | 'md';
}

export function Avatar({ title, alt, img, rounded, size }: AvatarType) {
  let px = 8;
  switch (size) {
    case 'sm':
      px = 8;
      break;
    case 'md':
      px = 10;
      break;
  }

  return <img className={`w-${px} h-${px} p-1 ${rounded && 'rounded-full'}`} src={img} alt={alt} title={title} />;
}
