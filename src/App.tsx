import { useState, useEffect, useRef, useCallback } from "react";

/* ─── ICONOS ─────────────────────────────── */
const WAIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48">
    <rect width="48" height="48" rx="12" fill="#25D366" />
    <path
      fill="#fff"
      d="M24 8C15 8 8 15 8 24c0 3 .8 5.8 2.3 8.2L8 40l8.5-2.2C19 39 21.4 40 24 40c9 0 16-7 16-16S33 8 24 8z"
    />
  </svg>
);

/* ─── CONFIG ─────────────────────────────── */
const WA_NUMBER = "message/Q3LXIL2BTKP6I1";
const WA_BASE = "https://wa.me/";

const fmt = (n: number) => `$${n.toLocaleString("es-MX")}`;

/* ─── PRODUCTOS (simplificado pero funcional) ─── */
const PRODUCTS = [
  { id: "1", name: "Dior Sauvage", price: 1890, size: "100ml", cat: "hombre" },
  { id: "2", name: "Versace Eros", price: 1390, size: "100ml", cat: "hombre" },
  { id: "3", name: "YSL Libre", price: 1790, size: "90ml", cat: "mujer" },
  { id: "4", name: "Good Girl", price: 1690, size: "80ml", cat: "mujer" },
];

/* ─── CART ─────────────────────────────── */
function useCart() {
  const [items, setItems] = useState<any[]>([]);

  const add = (p: any) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === p.id);
      if (found) {
        return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const remove = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const change = (id: string, d: number) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + d) } : i))
    );

  const clear = () => setItems([]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  const checkout = () => {
    if (!items.length) return;

    const msg =
      "Hola! quiero pedir:\n\n" +
      items.map((i) => `• ${i.qty}x ${i.name} (${i.size})`).join("\n") +
      `\n\nTOTAL: ${fmt(total)}`;

    window.open(`${WA_BASE}${WA_NUMBER}?text=${encodeURIComponent(msg)}`);
  };

  return { items, add, remove, change, clear, total, count, checkout };
}

/* ─── APP ─────────────────────────────── */
export default function App() {
  const cart = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1 style={{ fontSize: 28 }}>Perfumes Shop</h1>

      {/* PRODUCTOS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 10,
        }}
      >
        {PRODUCTS.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: 10 }}>
            <h3>{p.name}</h3>
            <p>{p.size}</p>
            <p>{fmt(p.price)}</p>
            <button onClick={() => cart.add(p)}>Agregar</button>
          </div>
        ))}
      </div>

      {/* BOTÓN CARRITO */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: 15,
          background: "#000",
          color: "#fff",
        }}
      >
        Carrito ({cart.count})
      </button>

      {/* CARRITO */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: 300,
            height: "100%",
            background: "#fff",
            padding: 20,
            overflow: "auto",
          }}
        >
          <button onClick={() => setOpen(false)}>Cerrar</button>

          {cart.items.map((i) => (
            <div key={i.id} style={{ marginBottom: 10 }}>
              <p>{i.name}</p>
              <p>{fmt(i.price * i.qty)}</p>

              <button onClick={() => cart.change(i.id, -1)}>-</button>
              <span>{i.qty}</span>
              <button onClick={() => cart.change(i.id, 1)}>+</button>

              <button onClick={() => cart.remove(i.id)}>x</button>
            </div>
          ))}

          <h3>Total: {fmt(cart.total)}</h3>

          <button onClick={cart.checkout}>Pagar por WhatsApp</button>

          <button onClick={cart.clear}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
}
