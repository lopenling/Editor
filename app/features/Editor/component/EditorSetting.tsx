import { FaBars } from 'react-icons/fa';
import { FcSettings } from 'react-icons/fc';
import { changeFont, exportDoc } from '../lib';
import { useState } from 'react';
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_MOBILE } from '~/constants';
import { isSmallScreen } from '~/lib';
import { Editor } from '@tiptap/react';
import { useLoaderData, useSearchParams } from '@remix-run/react';
import { useRecoilState } from 'recoil';
import { ImageState } from '~/states';
import ImageWithPlaceholder from '~/features/Media/Image';
import { Dropdown } from 'flowbite-react';

type theme = { background: string; text: string };

export default function EditorSetting({ editor }: { editor: Editor }) {
  const [image, setShowImage] = useRecoilState(ImageState);
  const data = useLoaderData();
  let [searchParam] = useSearchParams();
  const version = searchParam.get('version');

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value;
    setFontSize(parseInt(value));
    changeFont(value);
  };
  const toggleImage = (e) => {
    setShowImage({ ...image, show: e.target.checked });
  };
  const [fontSize, setFontSize] = useState(isSmallScreen ? DEFAULT_FONT_SIZE_MOBILE : DEFAULT_FONT_SIZE);

  let themes: theme[] = [
    { background: 'white', text: 'black' },
    { background: '#C4E0A6', text: 'black' },
    { background: '#B9F3DD', text: 'black' },
    { background: '#5A5A5C', text: 'white' },
  ];
  const changeTheme = (theme: theme) => {
    document.documentElement.style.setProperty('--background-text-editor', theme.background);
    document.documentElement.style.setProperty('--text-text-editor', theme.text);
  };

  return (
    <Dropdown
      label="editor_setting"
      renderTrigger={() => (
        <button className="mr-3">
          <FcSettings color="inherit" className="fill-gray-400 hover:text-gray-600 md:hidden " size={24} />
          <FaBars color="inherit" className="hidden fill-gray-400 hover:text-gray-600 md:block " size={24} />
        </button>
      )}
      className="py-1 text-sm text-gray-700 dark:bg-gray-600 dark:text-gray-200"
      aria-labelledby="dropdownMenuIconHorizontalButton"
    >
      <Dropdown.Item className="flex cursor-pointer flex-col gap-2 bg-gray-100 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-white">
        <div className="flex flex-col items-center">
          <ImageWithPlaceholder
            src={`https://opf.fi/image/${data.text.id}/${data.order}/${version}`}
            alt={'qr'}
            title="copy url"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
          />
        </div>
      </Dropdown.Item>
      {image.url && (
        <Dropdown.Item className="flex items-center px-4 py-2">
          <input
            checked={image.show}
            id="imageToggle"
            type="checkbox"
            className="mb-2 mr-2 cursor-pointer"
            onChange={toggleImage}
          />
          <label htmlFor="imageToggle" className="mb-2 cursor-pointer">
            Image
          </label>
        </Dropdown.Item>
      )}
      <Dropdown.Item
        onClick={() => exportDoc(editor?.getText(), data.text.name)}
        className=" flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17ZM6.293 9.293C6.48053 9.10553 6.73484 9.00021 7 9.00021C7.26516 9.00021 7.51947 9.10553 7.707 9.293L9 10.586V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V10.586L12.293 9.293C12.3852 9.19749 12.4956 9.12131 12.6176 9.0689C12.7396 9.01649 12.8708 8.9889 13.0036 8.98775C13.1364 8.9866 13.2681 9.0119 13.391 9.06218C13.5139 9.11246 13.6255 9.18671 13.7194 9.28061C13.8133 9.3745 13.8875 9.48615 13.9378 9.60905C13.9881 9.73194 14.0134 9.86362 14.0123 9.9964C14.0111 10.1292 13.9835 10.2604 13.9311 10.3824C13.8787 10.5044 13.8025 10.6148 13.707 10.707L10.707 13.707C10.5195 13.8945 10.2652 13.9998 10 13.9998C9.73484 13.9998 9.48053 13.8945 9.293 13.707L6.293 10.707C6.10553 10.5195 6.00021 10.2652 6.00021 10C6.00021 9.73484 6.10553 9.48053 6.293 9.293Z"
            className="fill-gray-600"
          />
        </svg>
        Export
      </Dropdown.Item>

      <Dropdown.Item className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        Font Size{' '}
        <input
          type="number"
          min={10}
          value={fontSize}
          size={2}
          max={40}
          style={{ border: 0, padding: 0, width: 40, color: 'black' }}
          onChange={handleFontSizeChange}
        />
      </Dropdown.Item>
      <Dropdown.Item className="flex  items-center gap-2 px-4 py-2">
        <div className="flex gap-2">
          {themes.map((theme) => {
            return (
              <div
                key={theme.background}
                className="h-5 w-5 cursor-pointer rounded-full border-2 hover:border-gray-400"
                title={theme.background}
                style={{ backgroundColor: theme.background }}
                onClick={() => changeTheme(theme)}
              ></div>
            );
          })}
        </div>
      </Dropdown.Item>
      <Dropdown.Item className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        Report
      </Dropdown.Item>
    </Dropdown>
  );
}
