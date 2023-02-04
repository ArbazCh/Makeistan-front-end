import API from "../api/axios.config";

const postOrderService = async (quantity, totalAmount) => {
  // console.log(totalAmount, deliveryCharge);
  return await API.post("/orders/create", {
    paymentId: "1",
    date: "2020-03-12",
    orderStatus: "pending",
    productId: "3",
    sellerId: 3,
    orderNumber: "1234567",
    quantity: `${quantity}`,
    totalPrice: `${totalAmount}`,
  });
};

export default postOrderService;
