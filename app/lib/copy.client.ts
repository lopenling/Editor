import toast from 'react-hot-toast';

function copy(data: string) {
  navigator.clipboard.writeText(data);
  toast.success('text url copied', {
    icon: '👏',
  });
}

export default copy;
