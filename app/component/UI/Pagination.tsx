import { Link, useLoaderData, useNavigation } from '@remix-run/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type PaginationPropType = {
  pageCount: number;
};

export default function Pagination({ pageCount }: PaginationPropType) {
  let data = useLoaderData();
  let textId = data.text.id;
  let order = data.page.order;
  let navigation = useNavigation();
  let PreviousLink = `/text/${textId}/page/${order - 1}/posts`;
  let nextLink = `/text/${textId}/page/${order + 1}/posts`;
  return (
    <div className="flex justify-end gap-3">
      {order - 1 > 0 && (
        <Link to={PreviousLink} className="mr-1 flex items-center gap-2 rounded bg-gray-100 p-1">
          <FaArrowLeft />
          previous
        </Link>
      )}
      {order + 1 <= pageCount && (
        <Link to={nextLink} className="mr-1 flex items-center gap-2 rounded bg-gray-100 p-1">
          next
          <FaArrowRight />
        </Link>
      )}
    </div>
  );
}
