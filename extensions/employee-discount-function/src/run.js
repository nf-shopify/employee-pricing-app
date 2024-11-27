import { DiscountApplicationStrategy } from "../generated/api";

const EMPTY_DISCOUNT = {
  discountApplicationStrategy: DiscountApplicationStrategy.First,
  discounts: [],
};

export function run(input) {
  // if buyer identity is null return no discount
  if (!input?.cart?.buyerIdentity) {
    return EMPTY_DISCOUNT;
  }

  // destructure objects
  const { customer } = input?.cart?.buyerIdentity;
  const { lines } = input?.cart;

  // function to check if buyer is an employee based on email
  function isEmployee(email) {
    const lowerCaseEmail = email.toLowerCase();
    return (
      lowerCaseEmail.includes("@shopify.com") ||
      lowerCaseEmail.includes("@shop.com")
    );
  }

  // call employee check function
  const employee = isEmployee(customer?.email);

  // if not an employee return empty discount
  if (!employee) {
    console.error("Customer is not an employee.");
    return EMPTY_DISCOUNT;
  }

  const discountArray = lines
    // Only include cart lines with employee price metafield populated
    .filter(
      (line) =>
        line?.merchandise?.__typename === "ProductVariant" &&
        line?.merchandise?.employeePrice?.jsonValue
    )
    .map((line) => {
      // grab total price for line
      const totalPrice = line?.cost?.totalAmount?.amount;
      // calculate final price for employee
      const employeePrice = line?.merchandise?.employeePrice?.jsonValue * line?.quantity;
      // calculate employee discount
      const employeeDiscount = totalPrice - employeePrice;

      // return employee discount by line item
      return {
        targets: [
          {
            cartLine: {
              id: line.id,
            },
          },
        ],
        value: {
          fixedAmount: {
            amount: employeeDiscount,
          },
        },
      };
    });

  // if there are no discounts to apply return empty discount
  if (!discountArray.length) {
    console.error("No cart lines qualify for employee discount.");
    return EMPTY_DISCOUNT;
  }

  return {
    discounts: discountArray,
    discountApplicationStrategy: DiscountApplicationStrategy.All,
  };
}
