import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectSearch, setSearchTerm } from "../features/search/searchSlice";
import { IconSearch } from "./icons/IconSearch";

export const ProductSearch = () => {
  const dispatch = useAppDispatch();
  const { term } = useAppSelector(selectSearch);

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div>
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IconSearch />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
          autoComplete="off"
          placeholder="Search Products..."
          required
          value={term}
          onInput={onInput}
        />
      </div>
    </div>
  );
};
