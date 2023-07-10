import { useDetectClickOutside } from 'react-detect-click-outside';
import { FaBars } from 'react-icons/fa';
import { changeFont, exportDoc, scrollThreadIntoView } from '../lib';
import { useEffect, useMemo, useState } from 'react';
import { DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE_MOBILE } from '~/constants';
import { isSmallScreen } from '~/lib';
import { Editor } from '@tiptap/react';
import { useLoaderData, useLocation } from '@remix-run/react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { showImageState, textInfo } from '~/states';

export default function EditorSetting({ editor }: { editor: Editor }) {
  const [showImage, setShowImage] = useRecoilState(showImageState);
  const data = useLoaderData();
  const imageUrl=data.page.imageUrl;
  const ref = useDetectClickOutside({
    onTriggered: () => setOpenEditMenu(false),
  });
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value: string = e.target.value;
    setFontSize(parseInt(value));
    changeFont(value);
  };
  const toggleImage = (e) => {
    setShowImage(e.target.checked);
  };
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [openShare,setOpenShare]=useState(false);
  const [fontSize, setFontSize] = useState(isSmallScreen ? DEFAULT_FONT_SIZE_MOBILE : DEFAULT_FONT_SIZE);

  let themes = [
    { background: 'white', text: 'black' },
    { background: '#C4E0A6', text: 'black' },
    { background: '#B9F3DD', text: 'black' },
    { background: '#5A5A5C', text: 'white' },
  ];
  const changeTheme = (theme) => { 
    document.documentElement.style.setProperty('--background-text-editor', theme.background);
    document.documentElement.style.setProperty('--text-text-editor', theme.text);
  }
  


  function handleShare(e){
   setOpenShare(!openShare);
  }

  return (
    <div className="mr-2 mt-2">
      <button type="button" onClick={() => setOpenEditMenu((p) => !p)}>
        <FaBars color="inherit" className="fill-gray-400 hover:text-gray-600 " size={24} />
      </button>
      {openEditMenu && (
        <div
          ref={ref}
          style={{ top: '100%', right: '5%' }}
          className="absolute  z-50 w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li className="flex cursor-pointer flex-col gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="flex flex-col items-center">
                <img
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  src="data:image/png;base64,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"
                  alt="qr"
                  title="copy url"
                  // onClick={handleQrClick}
                  className="w-full cursor-pointer object-contain"
                />
              </div>
            </li>
            {imageUrl && (
              <li className="flex items-center px-4 py-2">
                <input
                  checked={showImage}
                  id="imageToggle"
                  type="checkbox"
                  className="mb-2 mr-2 cursor-pointer"
                  onChange={toggleImage}
                />
                <label htmlFor="imageToggle" className="mb-2 cursor-pointer">
                  Image
                </label>
              </li>
            )}
            <li
              onClick={() => exportDoc(editor?.getText(), data.text.name)}
              className=" flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17ZM6.293 9.293C6.48053 9.10553 6.73484 9.00021 7 9.00021C7.26516 9.00021 7.51947 9.10553 7.707 9.293L9 10.586V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V10.586L12.293 9.293C12.3852 9.19749 12.4956 9.12131 12.6176 9.0689C12.7396 9.01649 12.8708 8.9889 13.0036 8.98775C13.1364 8.9866 13.2681 9.0119 13.391 9.06218C13.5139 9.11246 13.6255 9.18671 13.7194 9.28061C13.8133 9.3745 13.8875 9.48615 13.9378 9.60905C13.9881 9.73194 14.0134 9.86362 14.0123 9.9964C14.0111 10.1292 13.9835 10.2604 13.9311 10.3824C13.8787 10.5044 13.8025 10.6148 13.707 10.707L10.707 13.707C10.5195 13.8945 10.2652 13.9998 10 13.9998C9.73484 13.9998 9.48053 13.8945 9.293 13.707L6.293 10.707C6.10553 10.5195 6.00021 10.2652 6.00021 10C6.00021 9.73484 6.10553 9.48053 6.293 9.293Z"
                  className="fill-gray-600"
                />
              </svg>
              Export
            </li>

            <li className="flex cursor-pointer items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Font Size{' '}
              <input
                type="number"
                min={10}
                value={fontSize}
                size={2}
                max={40}
                style={{ border: 0, padding:0,width:40 }}
                onChange={handleFontSizeChange}
              />
            </li>
            <li className="flex  items-center gap-2 px-4 py-2">
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
            </li>
            <li className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Report
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
