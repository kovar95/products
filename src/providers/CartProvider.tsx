import Product from "@/types/Product";
import { useState, createContext, useContext, useMemo, ReactNode } from "react";

type CartContextType = {
  orderItems: Array<{
    item: Product;
    amount: number;
  }>;
  addItem: (item: Product, amount: number) => void;
  removeItem: (itemId: number) => void;
  increaseAmount: (itemId: number) => void;
  decreaseAmount: (itemId: number) => void;
};

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

type Props = {
  children: ReactNode;
};

export default function CartContextProvider({
  children,
}: Props): React.ReactElement {
  const [orderItems, setOrderItems] = useState<
    Array<{
      item: Product;
      amount: number;
    }>
  >([]);

  const addItem = (item: Product, amount: number) => {
    setOrderItems((prevItems) => [...prevItems, { item, amount }]);
  };

  const removeItem = (itemId: number) => {
    setOrderItems((prevItems) =>
      prevItems.filter(({ item }) => item.id !== itemId)
    );
  };

  const increaseAmount = (itemId: number) => {
    setOrderItems((prevItems) =>
      prevItems.map(({ item, amount }) => ({
        item,
        amount: item.id !== itemId ? amount : amount + 1,
      }))
    );
  };

  const decreaseAmount = (itemId: number) => {
    setOrderItems((prevItems) =>
      prevItems.map(({ item, amount }) => ({
        item,
        amount: item.id === itemId && amount !== 1 ? amount - 1 : amount,
      }))
    );
  };

  const contextValues = useMemo(
    () => ({ orderItems, addItem, removeItem, increaseAmount, decreaseAmount }),
    [orderItems]
  );

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
