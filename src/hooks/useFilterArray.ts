import { useState } from "react";

type GenericObject = { [key: string]: any };

type filterFunc = (field: string, text: string) => void;

type useFilterArrayReturn<T> = [
  array: T[],
  filterFunc: filterFunc,
  resetFunc: () => void
];

export const useFilterArray = <T extends GenericObject>(
  itemsArray: T[],
  identifier: string = "id"
): useFilterArrayReturn<T> => {
  const [filteredArray, setFilteredArray] = useState<T[]>([]);

  const filterArray: filterFunc = (
    filteredField: string,
    filterText: string
  ) => {
    for (let keyword of filterText.split(" ")) {
      setFilteredArray((state) =>
        state.concat(
          itemsArray.filter((arrayItem) =>
            arrayItem[filteredField]
              .split(" ")
              .some(
                (word: string) =>
                  word.toLowerCase() === keyword.toLowerCase() &&
                  state.every(
                    (item) => item[identifier] !== arrayItem[identifier]
                  )
              )
          )
        )
      );
    }
  };

  const resetArray = () => setFilteredArray([]);

  return [filteredArray, filterArray, resetArray];
};
