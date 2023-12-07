import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import Controls from './Controls';

type ImageComponentProps = {
  Image: any;
  handleImageLoaded: () => void;
};

const ImageComponent = ({ Image, handleImageLoaded }: ImageComponentProps) => (
  <div
    className="relative flex w-full max-w-full justify-center bg-gray-100"
    onMouseDown={(e) => (e.target.style.cursor = 'grabbing')}
    onMouseUp={(e) => (e.target.style.cursor = 'grab')}
  >
    <TransformWrapper>
      {(utils) => (
        <>
          <Controls {...utils} url={Image.url} />
          <TransformComponent
            wrapperStyle={{ zIndex: 10, width: '100%', maxHeight: '40vh', cursor: 'grab' }}
            contentStyle={{ width: '100%', maxHeight: '100%' }}
          >
            <img
              alt="Text Image"
              src={Image.url}
              className="text-image border-2 border-gray-200"
              style={{ maxHeight: '100%', objectFit: 'contain' }}
              onLoad={handleImageLoaded}
            />
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  </div>
);

export default ImageComponent;
