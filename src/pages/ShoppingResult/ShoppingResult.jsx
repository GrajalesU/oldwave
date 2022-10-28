import React from "react";
import PurchaseError from "../../components/PurchaseError/PurchaseError";
import RightPurchase from "../../components/RightPurchase/RightPurchase";

const ShoppingResult = ({ Error }) => {
  if (Error) return <PurchaseError />;
  return <RightPurchase />;
};

export default ShoppingResult;
