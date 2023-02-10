import API from "../api/axios.config";

const postOrderService = async (quantity, totalAmount) => {
  // console.log(totalAmount, deliveryCharge);
  try {
    const result = await API.post("/orders/create", {
      paymentId: "1",
      date: "2020-03-12",
      orderStatus: "pending",
      productId: "3",
      sellerId: 3,
      orderNumber: "1234567",
      quantity: `${quantity}`,
      totalPrice: `${totalAmount}`,
    });
    // console.log("try order: ", result);
    return result;
  } catch (err) {
    console.log("order service catch error: ", err.response);
    return err.response;
  }
};

export default postOrderService;
