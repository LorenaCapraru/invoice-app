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
  return (
    <div>
      <div className="name-tax">Subtotal {subtotal()}</div>
      <div className="name-tax">TAX {tax()}</div>
      <div className="name-tax">VAT {tax()}</div>
      <div className="name-tax">VAT Reverse Charge {tax()}</div>
      <div className="name-tax">TOTAL {total()}</div>
    </div>
  );
};

export default Tax;
