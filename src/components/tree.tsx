import { CSSProperties, useState } from "react";
import "../styles/tree.css";

type ArrType = {
  key: string;
  items: string[];
};

export const BinaryTree = () => {
  const [tree, setTree] = useState<ArrType[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newArr: string[] = inputValue?.split(" ");
    const newArrLength = newArr?.length;

    setTree([
      ...(newArrLength === 1 ? [{ key: "1", items: newArr }] : []),
      ...(newArr?.length > 1 && newArr?.length <= 3
        ? [
            { key: "1", items: newArr?.slice(0, 1) },
            {
              key: "2",
              items: newArr?.slice(1, 3),
            },
          ]
        : []),
      ...(newArr?.length > 3 && newArr?.length <= 7
        ? [
            { key: "1", items: newArr?.slice(0, 1) },
            {
              key: "2",
              items: newArr?.slice(1, 3),
            },
            {
              key: "4",
              items: newArr?.slice(3, 7),
            },
          ]
        : []),
      ...(newArr?.length > 7 && newArr?.length <= 16
        ? [
            { key: "1", items: newArr?.slice(0, 1) },
            {
              key: "2",
              items: newArr?.slice(1, 3),
            },
            {
              key: "4",
              items: newArr?.slice(3, 7),
            },
            {
              key: "8",
              items: newArr?.slice(7, 16),
            },
          ]
        : []),
      ...(newArr?.length > 16 && newArr?.length <= 32
        ? [
            { key: "1", items: newArr?.slice(0, 1) },
            {
              key: "2",
              items: newArr?.slice(1, 3),
            },
            {
              key: "4",
              items: newArr?.slice(3, 7),
            },
            {
              key: "8",
              items: newArr?.slice(7, 16),
            },
            {
              key: "16",
              items: newArr?.slice(16, 32),
            },
          ]
        : []),
      ...(newArr?.length > 32 && newArr?.length <= 64
        ? [
            { key: "1", items: newArr?.slice(0, 1) },
            {
              key: "2",
              items: newArr?.slice(1, 3),
            },
            {
              key: "4",
              items: newArr?.slice(3, 7),
            },
            {
              key: "8",
              items: newArr?.slice(7, 16),
            },
            {
              key: "16",
              items: newArr?.slice(16, 32),
            },
            {
              key: "32",
              items: newArr?.slice(32, 64),
            },
          ]
        : []),
      ...(newArr?.length > 64 && newArr?.length <= 128
        ? [
            { key: "1", items: newArr?.slice(0, 1) },
            {
              key: "2",
              items: newArr?.slice(1, 3),
            },
            {
              key: "4",
              items: newArr?.slice(3, 7),
            },
            {
              key: "8",
              items: newArr?.slice(7, 16),
            },
            {
              key: "16",
              items: newArr?.slice(16, 32),
            },
            {
              key: "32",
              items: newArr?.slice(32, 64),
            },
            {
              key: "64",
              items: newArr?.slice(64, 128),
            },
          ]
        : []),
    ]);
  };

  return (
    <>
      <input type="text" onChange={onChange} />
      {tree.map((item, arrIndex) => {
        return (
          <div
            key={`arr-${item?.key}`}
            className="binary"
            style={styles.array(arrIndex)}
          >
            {item?.items?.map((item, index) => {
              return (
                <div key={`item-${index}`} className="tree-body">
                  <h2 className="title">{item}</h2>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

interface StylesType {
  array: (numOfItem: number) => CSSProperties;
}

const styles: StylesType = {
  array: (numOfItem) => ({
    width: `calc(${numOfItem}*12px)`,
  }),
};
