import "./Tax.css";

interface InvoiceItem {
  name: string;
  qty: number;
  price: number;
}
interface TaxProps {
  rows: InvoiceItem[];
}
const Tax: React.FC<TaxProps> = ({ rows }) => {
  const subtotal = () => {
    return rows.reduce(
      (sum: number, el: InvoiceItem) => sum + el.price * el.qty,
      0
    );
  };

  const tax = () => {
    const subTot = subtotal();
    return 0.2 * subTot;
  };

  const total = () => {
    const subTot = subtotal();
    return subTot - 0.2 * subTot;
  };

  const formatPrice = (total: number) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(total);
  };

  return (
    <div>
      <div className="name-tax">
        Subtotal <span>{formatPrice(subtotal())}</span>
      </div>
      <div className="name-tax">
        TAX <span>{formatPrice(tax())}</span>
      </div>
      <div className="name-tax">
        VAT <span>{formatPrice(tax())}</span>
      </div>
      <div className="name-tax">
        VAT Reverse Charge <span>{formatPrice(tax())}</span>
      </div>
      <div className="name-tax total">
        TOTAL <span>{formatPrice(total())}</span>
      </div>
    </div>
  );
};

export default Tax;
