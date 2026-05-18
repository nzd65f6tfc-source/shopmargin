const fields = {
  country: document.querySelector("#country"),
  currency: document.querySelector("#currency"),
  category: document.querySelector("#category"),
  price: document.querySelector("#price"),
  cost: document.querySelector("#cost"),
  shipping: document.querySelector("#shipping"),
  adSpend: document.querySelector("#adSpend"),
  platformFee: document.querySelector("#platformFee"),
  affiliateCommission: document.querySelector("#affiliateCommission"),
  discount: document.querySelector("#discount"),
  shippingSubsidy: document.querySelector("#shippingSubsidy"),
  refundRate: document.querySelector("#refundRate"),
  orders: document.querySelector("#orders"),
};

const outputs = {
  totalCosts: document.querySelector("#totalCosts"),
  platformFeeAmount: document.querySelector("#platformFeeAmount"),
  affiliateAmount: document.querySelector("#affiliateAmount"),
  netRevenue: document.querySelector("#netRevenue"),
  monthlyProfit: document.querySelector("#monthlyProfit"),
  profitPerOrder: document.querySelector("#profitPerOrder"),
  margin: document.querySelector("#margin"),
  roas: document.querySelector("#roas"),
  suggestedPrice: document.querySelector("#suggestedPrice"),
  insight: document.querySelector("#insight"),
  copyStatus: document.querySelector("#copyStatus"),
};

const copyEmbedButton = document.querySelector("#copyEmbed");
const embedCode = document.querySelector("#embedCode");

const currencyLocales = {
  USD: "en-US",
  GBP: "en-GB",
  PHP: "en-PH",
  MYR: "en-MY",
};

const currencySymbols = {
  USD: "$",
  GBP: "£",
  PHP: "₱",
  MYR: "RM",
};

const countryDefaults = {
  US: { currency: "USD", fee: 8 },
  UK: { currency: "GBP", fee: 5 },
  PH: { currency: "PHP", fee: 5 },
  MY: { currency: "MYR", fee: 5 },
};

const categoryFeeDefaults = {
  general: 8,
  beauty: 8,
  fashion: 8,
  electronics: 8,
  home: 8,
};

let formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

function valueOf(input) {
  return Number.parseFloat(input.value) || 0;
}

function calculate() {
  formatter = new Intl.NumberFormat(currencyLocales[fields.currency.value] || "en-US", {
    style: "currency",
    currency: fields.currency.value,
    maximumFractionDigits: 2,
  });

  const price = valueOf(fields.price);
  const productCost = valueOf(fields.cost);
  const shipping = valueOf(fields.shipping);
  const adSpend = valueOf(fields.adSpend);
  const platformFee = valueOf(fields.platformFee) / 100;
  const affiliateCommission = valueOf(fields.affiliateCommission) / 100;
  const discount = valueOf(fields.discount);
  const shippingSubsidy = valueOf(fields.shippingSubsidy);
  const refundRate = valueOf(fields.refundRate) / 100;
  const orders = valueOf(fields.orders);

  const netRevenue = Math.max(0, price - discount);
  const platformFeeCost = netRevenue * platformFee;
  const affiliateCost = netRevenue * affiliateCommission;
  const expectedRefundLoss = netRevenue * refundRate;
  const totalCost =
    productCost +
    shipping +
    shippingSubsidy +
    adSpend +
    platformFeeCost +
    affiliateCost +
    expectedRefundLoss;
  const profitPerOrder = netRevenue - totalCost;
  const monthlyProfit = profitPerOrder * orders;
  const margin = netRevenue > 0 ? (profitPerOrder / netRevenue) * 100 : 0;
  const contributionBeforeAds =
    netRevenue -
    productCost -
    shipping -
    shippingSubsidy -
    platformFeeCost -
    affiliateCost -
    expectedRefundLoss;
  const breakEvenRoas = contributionBeforeAds > 0 ? netRevenue / contributionBeforeAds : 0;
  const targetMargin = 0.25;
  const variableRate = platformFee + affiliateCommission + refundRate + targetMargin;
  const suggestedPrice =
    (productCost + shipping + shippingSubsidy + adSpend - discount) /
    Math.max(0.01, 1 - variableRate);

  outputs.totalCosts.textContent = formatter.format(totalCost);
  outputs.platformFeeAmount.textContent = formatter.format(platformFeeCost);
  outputs.affiliateAmount.textContent = formatter.format(affiliateCost);
  outputs.netRevenue.textContent = formatter.format(netRevenue);
  outputs.monthlyProfit.textContent = formatter.format(monthlyProfit);
  outputs.profitPerOrder.textContent = formatter.format(profitPerOrder);
  outputs.margin.textContent = `${margin.toFixed(1)}%`;
  outputs.roas.textContent = `${breakEvenRoas.toFixed(2)}x`;
  outputs.suggestedPrice.textContent = formatter.format(suggestedPrice);
  outputs.insight.textContent = getInsight(margin, profitPerOrder);
  updateCurrencySymbols();
}

Object.values(fields).forEach((field) => {
  field.addEventListener("input", calculate);
  field.addEventListener("change", calculate);
});

fields.country.addEventListener("change", () => {
  const defaults = countryDefaults[fields.country.value];

  if (defaults) {
    fields.currency.value = defaults.currency;
    fields.platformFee.value = defaults.fee;
  }

  calculate();
});

fields.category.addEventListener("change", () => {
  fields.platformFee.value = categoryFeeDefaults[fields.category.value] || 8;
  calculate();
});

function updateCurrencySymbols() {
  const symbol = currencySymbols[fields.currency.value] || "$";

  document.querySelectorAll(".currency-symbol").forEach((element) => {
    element.textContent = symbol;
  });
}

function getInsight(margin, profitPerOrder) {
  if (profitPerOrder < 0) {
    return "Losing money: this product is negative after TikTok Shop fees, commission, shipping, refunds, and ads.";
  }

  if (margin < 15) {
    return "Thin margin: this product may be risky once returns, higher ad costs, or extra discounts are included.";
  }

  if (margin < 30) {
    return "Workable margin: this product has room to test creators or ads, but keep an eye on commission and shipping.";
  }

  return "Healthy margin: this product has a strong buffer after fees and seller costs, based on your assumptions.";
}

calculate();

copyEmbedButton.addEventListener("click", async () => {
  const text = embedCode.textContent;

  try {
    await navigator.clipboard.writeText(text);
    outputs.copyStatus.textContent = "Embed code copied.";
  } catch {
    outputs.copyStatus.textContent = "Select the embed code and copy it manually.";
  }
});
