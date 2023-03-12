import { useRef, useState } from "react";
import "../styles/tree.css";

const data = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

type ArrType = {
  key?: string;
  items: string[];
};

const rows = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];

export const BinaryTree = () => {
  const [tree, setTree] = useState<ArrType[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const newArr: string[] = inputValue?.split(" ");
    const newArrLength = newArr?.length;

    setTree([
      ...(newArrLength === 1 ? [{ key: `arr-${1}`, items: newArr }] : []),
      ...(newArr?.length > 1 && newArr?.length <= 3
        ? [
            { key: `arr-${1}`, items: newArr?.slice(0, 1) },
            {
              key: `arr-${2}`,
              items: newArr?.slice(1, 3),
            },
          ]
        : []),
      ...(newArr?.length > 3 && newArr?.length <= 7
        ? [
            { key: `arr-${1}`, items: newArr?.slice(0, 1) },
            {
              key: `arr-${2}`,
              items: newArr?.slice(1, 3),
            },
            {
              key: `arr-${4}`,
              items: newArr?.slice(3, 7),
            },
          ]
        : []),
      ...(newArr?.length > 7 && newArr?.length <= 16
        ? [
            { key: `arr-${1}`, items: newArr?.slice(0, 1) },
            {
              key: `arr-${2}`,
              items: newArr?.slice(1, 3),
            },
            {
              key: `arr-${4}`,
              items: newArr?.slice(3, 7),
            },
            {
              key: `arr-${8}`,
              items: newArr?.slice(7, 16),
            },
          ]
        : []),
      ...(newArr?.length > 16 && newArr?.length <= 32
        ? [
            { key: `arr-${1}`, items: newArr?.slice(0, 1) },
            {
              key: `arr-${2}`,
              items: newArr?.slice(1, 3),
            },
            {
              key: `arr-${4}`,
              items: newArr?.slice(3, 7),
            },
            {
              key: `arr-${8}`,
              items: newArr?.slice(7, 16),
            },
            {
              key: `arr-${16}`,
              items: newArr?.slice(16, 32),
            },
          ]
        : []),
      ...(newArr?.length > 32 && newArr?.length <= 64
        ? [
            { key: `arr-${1}`, items: newArr?.slice(0, 1) },
            {
              key: `arr-${2}`,
              items: newArr?.slice(1, 3),
            },
            {
              key: `arr-${4}`,
              items: newArr?.slice(3, 7),
            },
            {
              key: `arr-${8}`,
              items: newArr?.slice(7, 16),
            },
            {
              key: `arr-${16}`,
              items: newArr?.slice(16, 32),
            },
            {
              key: `arr-${32}`,
              items: newArr?.slice(32, 64),
            },
          ]
        : []),
      ...(newArr?.length > 64 && newArr?.length <= 128
        ? [
            { key: `arr-${1}`, items: newArr?.slice(0, 1) },
            {
              key: `arr-${2}`,
              items: newArr?.slice(1, 3),
            },
            {
              key: `arr-${4}`,
              items: newArr?.slice(3, 7),
            },
            {
              key: `arr-${8}`,
              items: newArr?.slice(7, 16),
            },
            {
              key: `arr-${16}`,
              items: newArr?.slice(16, 32),
            },
            {
              key: `arr-${32}`,
              items: newArr?.slice(32, 64),
            },
            {
              key: `arr-${64}`,
              items: newArr?.slice(64, 128),
            },
          ]
        : []),
    ]);
  };

  return (
    <>
      <input type="text" onChange={onChange} />
      {tree.map((item) => {
        return (
          <div key={`arr-${item?.key}`} className="binary">
            {item?.items?.map((item, index) => {
              return (
                <div key={`item-${index}`}>
                  <h2>{item}</h2>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
