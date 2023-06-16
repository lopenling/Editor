interface AvatarType {
  title: string;
  alt: string;
  img: string;
  rounded: boolean;
  size: 'sm' | 'md';
}

export function Avatar({ title, alt, img, rounded, size }: AvatarType) {
  let px = 29;
  switch (size) {
    case 'sm':
      px = 29;
      break;
    case 'md':
      px = 40;
      break;
  }

  return <img className={`${rounded && 'rounded-full'}`} src={img} alt={alt} title={title}
  style={{width:px,height:px}} 
  />;
}
