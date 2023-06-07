import { useState, useId, useEffect, memo } from 'react';
import { useFetcher } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { filterDataState, openFilterState } from '~/states';
import uselitteraTranlation from '~/locales/useLitteraTranslations';
import Datepicker from 'react-tailwindcss-datepicker';
import { Modal } from 'flowbite-react';
import { Button } from '~/component/UI';
type FilterProps = {};
function Filter({}: FilterProps) {
  const [filterData, setFilterData] = useRecoilState(filterDataState);
  const [openFilter, setOpenFilter] = useRecoilState(openFilterState);
  const [userInput, setUserInput] = useState('');
  const searchUser = useFetcher();
  const typeId = useId();
  const solvedId = useId();

  useEffect(() => {
    setUserInput('');
  }, [filterData]);

  const handleTypeCheck = (e) => {
    let solved = e.target.value === 'comment' ? 'both' : filterData.solved;
    setFilterData((prevData) => ({
      ...prevData,
      type: e.target.value,
      solved,
    }));
  };

  const handleDateChange = (e) => {
    setFilterData((prevData) => ({ ...prevData, date: e }));
  };
  const handleSolvedChange = (e) => {
    setFilterData((prevData) => ({ ...prevData, solved: e.target.value }));
  };
  function handleNameClick(userToAdd: string) {
    if (filterData.user.includes(userToAdd) || !userToAdd.length) {
      return;
    }
    setFilterData((prev) => ({
      ...prev,
      user: [...prev.user, userToAdd],
    }));
  }
  function handleRemoveUser(userToRemove: string) {
    setFilterData((prev) => ({
      ...prev,
      user: prev.user.filter((names) => names !== userToRemove),
    }));
  }
  function apply() {
    setOpenFilter(false);
  }
  function reset() {
    setFilterData({
      type: 'all',
      date: { startDate: null, endDate: null },
      user: [],
      solved: 'both',
    });
  }
  const translation = uselitteraTranlation();

  let isFetchingUser = searchUser.state === 'loading';
  return (
    <Modal
      show={openFilter}
      onClose={() => setOpenFilter(false)}
      dismissible={true}
      size="md"
      style={{ height: '100dvh' }}
    >
      <Modal.Header>{translation.filter}</Modal.Header>
      <div className="p-5">
        <div className="flex flex-col items-start justify-start space-y-4">
          {/* Type of post  */}
          <div className="flex flex-col items-start justify-start space-y-2">
            <p className="text-sm font-semibold leading-tight">Type</p>
            <div className="flex flex-col items-start justify-start space-y-0.5">
              {[
                { value: 'all', label: 'All' },
                { value: 'comment', label: 'Comments only' },
                { value: 'question', label: 'Questions only' },
              ].map(({ value, label }) => (
                <div key={value} className="flex py-2">
                  <input
                    id={`${typeId}-${value}`}
                    type="radio"
                    onChange={handleTypeCheck}
                    checked={filterData.type === value}
                    value={value}
                    name="filter-type"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor={`${typeId}-${value}`}
                    className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* DateFilter */}
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <p className="text-sm font-semibold leading-tight ">Date</p>
            <Datepicker value={filterData.date} inputName="date" onChange={handleDateChange} />
          </div>
          {/* UserFilter */}
          <div className="flex w-full flex-col items-start justify-start space-y-2.5">
            <p className="text-sm font-semibold leading-tight ">Users</p>

            {filterData.user?.map((user) => {
              return (
                <div
                  key={user}
                  className="flex items-center justify-center space-x-1 rounded bg-gray-100 px-1.5 py-0.5"
                >
                  <p className="text-center text-xs font-medium leading-none text-gray-600">{user}</p>
                  <svg
                    onClick={() => handleRemoveUser(user)}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.18966 6.2102L8.18971 6.21014L8.18346 6.2041C7.91942 5.94908 7.56578 5.80797 7.1987 5.81116C6.83162 5.81435 6.48049 5.96159 6.22091 6.22116C5.96134 6.48073 5.81411 6.83187 5.81092 7.19894C5.80773 7.56602 5.94884 7.91966 6.20386 8.1837L6.20381 8.18376L6.20995 8.1899L7.0201 9.00005L6.2127 9.80745C6.0806 9.93591 5.97515 10.0892 5.90241 10.2585C5.82903 10.4293 5.79041 10.6131 5.7888 10.7989C5.78718 10.9848 5.82261 11.1692 5.893 11.3412C5.96339 11.5133 6.06735 11.6696 6.1988 11.8011C6.33025 11.9325 6.48656 12.0365 6.65861 12.1069C6.83067 12.1772 7.01502 12.2127 7.20091 12.2111C7.3868 12.2094 7.57051 12.1708 7.74132 12.0974C7.91064 12.0247 8.06392 11.9193 8.19237 11.7872L8.9998 10.9798L9.80995 11.7899L9.8099 11.79L9.81615 11.796C10.0802 12.051 10.4338 12.1921 10.8009 12.1889C11.168 12.1857 11.5191 12.0385 11.7787 11.7789C12.0383 11.5194 12.1855 11.1682 12.1887 10.8012C12.1919 10.4341 12.0508 10.0804 11.7957 9.81639L11.7958 9.81634L11.7897 9.8102L10.9795 9.00005L11.7897 8.1899L11.7897 8.18996L11.7957 8.1837C12.0508 7.91966 12.1919 7.56602 12.1887 7.19894C12.1855 6.83187 12.0383 6.48073 11.7787 6.22116C11.5191 5.96159 11.168 5.81435 10.8009 5.81116C10.4338 5.80797 10.0802 5.94908 9.81615 6.2041L9.8161 6.20405L9.80995 6.2102L8.9998 7.02034L8.18966 6.2102ZM13.7374 13.7377C12.4809 14.9942 10.7768 15.7 8.9998 15.7C7.22285 15.7 5.51868 14.9942 4.26219 13.7377C3.0057 12.4812 2.2998 10.777 2.2998 9.00005C2.2998 7.2231 3.0057 5.51893 4.26219 4.26243C5.51868 3.00594 7.22285 2.30005 8.9998 2.30005C10.7768 2.30005 12.4809 3.00594 13.7374 4.26243C14.9939 5.51893 15.6998 7.2231 15.6998 9.00005C15.6998 10.777 14.9939 12.4812 13.7374 13.7377Z"
                      fill="#9CA3AF"
                      stroke="#9CA3AF"
                    />
                  </svg>
                </div>
              );
            })}
            <div className="flex w-full flex-col items-start justify-start space-y-2 rounded-lg px-0.5 pb-1">
              <div className="inline-flex w-full items-center justify-start rounded-lg border border-blue-600 bg-gray-50 px-4 py-1">
                <div className="flex h-full flex-1 items-center justify-start space-x-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.75 15.75L11.25 11.25M12.75 7.5C12.75 8.18944 12.6142 8.87213 12.3504 9.50909C12.0865 10.146 11.6998 10.7248 11.2123 11.2123C10.7248 11.6998 10.146 12.0865 9.50909 12.3504C8.87213 12.6142 8.18944 12.75 7.5 12.75C6.81056 12.75 6.12787 12.6142 5.49091 12.3504C4.85395 12.0865 4.2752 11.6998 3.78769 11.2123C3.30018 10.7248 2.91347 10.146 2.64963 9.50909C2.3858 8.87213 2.25 8.18944 2.25 7.5C2.25 6.10761 2.80312 4.77226 3.78769 3.78769C4.77226 2.80312 6.10761 2.25 7.5 2.25C8.89239 2.25 10.2277 2.80312 11.2123 3.78769C12.1969 4.77226 12.75 6.10761 12.75 7.5Z"
                      stroke="#1C64F2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <searchUser.Form method="GET" action="/api/user/search" className="flex w-full">
                    <input
                      type="text"
                      name="filterUser"
                      value={userInput}
                      onChange={(e) => {
                        setUserInput(e.target.value);
                        searchUser.submit(
                          {
                            filterUser: e.target.value,
                          },
                          { method: 'GET', action: '/api/user/search' }
                        );
                      }}
                      className="h-full flex-1 border-none border-transparent bg-transparent text-sm leading-none text-gray-900 outline-none focus:border-none focus:border-transparent focus:outline-none focus:ring-0"
                    />
                    <button type="button" onClick={() => setUserInput('')}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8.18966 6.2102L8.18971 6.21014L8.18346 6.2041C7.91942 5.94908 7.56578 5.80797 7.1987 5.81116C6.83162 5.81435 6.48049 5.96159 6.22091 6.22116C5.96134 6.48073 5.81411 6.83187 5.81092 7.19894C5.80773 7.56602 5.94884 7.91966 6.20386 8.1837L6.20381 8.18376L6.20995 8.1899L7.0201 9.00005L6.2127 9.80745C6.0806 9.93591 5.97515 10.0892 5.90241 10.2585C5.82903 10.4293 5.79041 10.6131 5.7888 10.7989C5.78718 10.9848 5.82261 11.1692 5.893 11.3412C5.96339 11.5133 6.06735 11.6696 6.1988 11.8011C6.33025 11.9325 6.48656 12.0365 6.65861 12.1069C6.83067 12.1772 7.01502 12.2127 7.20091 12.2111C7.3868 12.2094 7.57051 12.1708 7.74132 12.0974C7.91064 12.0247 8.06392 11.9193 8.19237 11.7872L8.9998 10.9798L9.80995 11.7899L9.8099 11.79L9.81615 11.796C10.0802 12.051 10.4338 12.1921 10.8009 12.1889C11.168 12.1857 11.5191 12.0385 11.7787 11.7789C12.0383 11.5194 12.1855 11.1682 12.1887 10.8012C12.1919 10.4341 12.0508 10.0804 11.7957 9.81639L11.7958 9.81634L11.7897 9.8102L10.9795 9.00005L11.7897 8.1899L11.7897 8.18996L11.7957 8.1837C12.0508 7.91966 12.1919 7.56602 12.1887 7.19894C12.1855 6.83187 12.0383 6.48073 11.7787 6.22116C11.5191 5.96159 11.168 5.81435 10.8009 5.81116C10.4338 5.80797 10.0802 5.94908 9.81615 6.2041L9.8161 6.20405L9.80995 6.2102L8.9998 7.02034L8.18966 6.2102ZM13.7374 13.7377C12.4809 14.9942 10.7768 15.7 8.9998 15.7C7.22285 15.7 5.51868 14.9942 4.26219 13.7377C3.0057 12.4812 2.2998 10.777 2.2998 9.00005C2.2998 7.2231 3.0057 5.51893 4.26219 4.26243C5.51868 3.00594 7.22285 2.30005 8.9998 2.30005C10.7768 2.30005 12.4809 3.00594 13.7374 4.26243C14.9939 5.51893 15.6998 7.2231 15.6998 9.00005C15.6998 10.777 14.9939 12.4812 13.7374 13.7377Z"
                          fill="#9CA3AF"
                          stroke="#9CA3AF"
                        />
                      </svg>
                    </button>
                  </searchUser.Form>
                </div>
              </div>
              {isFetchingUser && 'loading'}
              {searchUser.data?.length > 0 && userInput !== '' && !isFetchingUser && (
                <div className="flex w-full flex-col items-center justify-start space-y-3 rounded-lg border border-gray-200  p-4 shadow">
                  {searchUser.data?.map((user) => {
                    return (
                      <div className="w-full cursor-pointer" key={user?.username}>
                        <div className="inline-flex w-full items-center justify-start space-x-2 rounded-lg">
                          <img className="h-6 w-6 rounded-full" src={user?.avatarUrl} alt="Extra small avatar"></img>
                          <div className="flex-1 text-sm leading-tight" onClick={() => handleNameClick(user?.username)}>
                            {user?.username}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {searchUser.data?.length === 0 && userInput !== '' && !isFetchingUser && (
                <span className="text-red-400">User not Found</span>
              )}
            </div>
          </div>

          {/* isSolved */}
          {filterData.type !== 'comment' && (
            <div className="flex flex-col items-start justify-start space-y-2">
              <p className="text-sm font-semibold leading-tight">Solved</p>
              <div className="flex flex-col items-start justify-start space-y-0.5">
                {[
                  { value: 'both', label: 'both' },
                  { value: 'solved', label: 'solved only' },
                  { value: 'unsolved', label: 'unsolved only' },
                ].map(({ value, label }) => (
                  <div key={value} className="flex py-2">
                    <input
                      id={`${solvedId}-${value}`}
                      type="radio"
                      value={value}
                      onChange={handleSolvedChange}
                      checked={filterData.solved === value}
                      name="filter-solved"
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      htmlFor={`${solvedId}-${value}`}
                      className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                    >
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-2 flex w-full items-start justify-end gap-3">
          <Button onClick={apply} label="Apply filters" type="submit" />
          <Button onClick={reset} color="light" type="reset" label="reset" />
        </div>
      </div>
    </Modal>
  );
}

export default memo(Filter);
