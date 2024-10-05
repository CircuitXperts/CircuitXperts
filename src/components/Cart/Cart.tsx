import CartSummary from "@/src/components/CartSummary/CartSummary";

export const CartPage: React.FC = () => {
  return (
    <div>
      <h1>Your Cart</h1>
      <CartSummary />
    </div>
  );
};

export default CartPage;
