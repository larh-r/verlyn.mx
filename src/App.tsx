import React from "react";

export default function App() {
  const perfumesHombre = [
    "Dior",
    "Valentino",
    "Prada",
    "Jean Paul Gaultier",
    "Yves Saint Laurent",
    "Versace",
  ];

  const perfumesMujer = [
    "Carolina Herrera",
    "Dior",
    "Chanel",
    "Valentino",
    "Yves Saint Laurent",
  ];

  const perfumesArabes = [
    "Lattafa",
    "Afnan",
    "Maison Alhambra",
    "Armaf",
    "Rasasi",
  ];

  return (
    <div
      style={{
        backgroundColor: "#141414",
        color: "#E1E1E1",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#1b1b1b",
          padding: "20px",
          borderBottom: "1px solid #303030",
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "#C4A77D",
              fontSize: "32px",
              margin: 0,
              letterSpacing: "3px",
            }}
          >
            VÉRYN
          </h1>

          <nav
            style={{
              display: "flex",
              gap: "20px",
              fontSize: "14px",
            }}
          >
            <a href="#inicio" style={linkStyle}>
              Inicio
            </a>
            <a href="#hombre" style={linkStyle}>
              Hombre
            </a>
            <a href="#mujer" style={linkStyle}>
              Mujer
            </a>
            <a href="#decants" style={linkStyle}>
              Decants
            </a>
            <a href="#contacto" style={linkStyle}>
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "52px",
            color: "#FFFFFF",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          Oler bien no es un lujo…{" "}
          <span style={{ color: "#C4A77D" }}>es tu esencia.</span>
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            color: "#bdbdbd",
          }}
        >
          Perfumes y decants 100% originales ✨
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <button style={primaryButton}>Comprar ahora</button>
          <button style={secondaryButton}>Ver catálogo</button>
        </div>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
            color: "#C4A77D",
          }}
        >
          <span>📦 Envíos a todo México</span>
          <span>📍 Puerto Vallarta</span>
          <span>📲 Pedidos por WhatsApp</span>
        </div>
      </section>

      {/* FAVORITOS */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Los favoritos de VÉRYN</h2>

        <div style={gridStyle}>
          {[
            "Perfumes más vendidos",
            "Tendencias de TikTok",
            "Fragancias recomendadas",
            "Nuevos ingresos",
          ].map((item) => (
            <div key={item} style={cardStyle}>
              <h3 style={{ color: "#FFFFFF" }}>{item}</h3>
              <button style={smallButton}>Añadir al carrito</button>
            </div>
          ))}
        </div>
      </section>

      {/* HOMBRE */}
      <section id="hombre" style={sectionStyle}>
        <h2 style={titleStyle}>Perfumes para Hombre</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitle}>Diseñador</h3>
            {perfumesHombre.map((brand) => (
              <p key={brand}>{brand}</p>
            ))}
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Nicho</h3>
            <p>Parfums de Marly</p>
            <p>Xerjoff</p>
            <p>Mancera</p>
            <p>Nishane</p>
            <p>Creed</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Árabes</h3>
            {perfumesArabes.map((brand) => (
              <p key={brand}>{brand}</p>
            ))}
          </div>
        </div>
      </section>

      {/* MUJER */}
      <section id="mujer" style={sectionStyle}>
        <h2 style={titleStyle}>Perfumes para Mujer</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitle}>Diseñador</h3>
            {perfumesMujer.map((brand) => (
              <p key={brand}>{brand}</p>
            ))}
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Nicho</h3>
            <p>Delina</p>
            <p>Baccarat Rouge 540</p>
            <p>Kilian</p>
            <p>Byredo</p>
            <p>Initio</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Árabes</h3>
            <p>Yara</p>
            <p>Bade’e Al Oud</p>
            <p>Fakhar</p>
            <p>Ana Abiyedh</p>
            <p>Club de Nuit</p>
          </div>
        </div>
      </section>

      {/* DECANTS */}
      <section id="decants" style={sectionStyle}>
        <h2 style={titleStyle}>¿Qué es un Decant?</h2>

        <div style={cardStyle}>
          <p>
            Un decant es una muestra original extraída directamente de un
            perfume auténtico.
          </p>

          <p>
            Es la mejor forma de probar nuevas fragancias antes de invertir en
            una botella completa.
          </p>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <span style={badgeStyle}>3 ml</span>
            <span style={badgeStyle}>5 ml</span>
            <span style={badgeStyle}>10 ml</span>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Sobre VÉRYN</h2>

        <div style={cardStyle}>
          <p>
            En VÉRYN creemos que un perfume no solo complementa tu imagen…
            define tu esencia.
          </p>

          <p>
            Seleccionamos perfumes y decants originales pensando en calidad,
            presencia y estilo para cada personalidad.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" style={sectionStyle}>
        <h2 style={titleStyle}>Contacto</h2>

        <div style={cardStyle}>
          <p>📍 Puerto Vallarta</p>
          <p>📦 Envíos a todo México</p>
          <p>🕘 Lunes a sábado | 9:00 a.m. – 6:00 p.m.</p>
          <p>💳 Tarjetas, transferencias y débito</p>

          <a
            href="https://wa.me/message/Q3LXIL2BTKP6I1"
            target="_blank"
            style={{
              ...primaryButton,
              display: "inline-block",
              marginTop: "20px",
              textDecoration: "none",
            }}
          >
            Pedir ahora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px 20px",
          borderTop: "1px solid #303030",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#C4A77D" }}>VÉRYN</h2>

        <p style={{ color: "#999" }}>
          Perfumes & Decants originales ✨
        </p>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a
            href="https://instagram.com/veryn_perfumes"
            target="_blank"
            style={linkStyle}
          >
            Instagram
          </a>

          <a
            href="https://tiktok.com/@vryn.decants.frag"
            target="_blank"
            style={linkStyle}
          >
            TikTok
          </a>
        </div>
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "#E1E1E1",
  textDecoration: "none",
};

const sectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "70px 20px",
};

const titleStyle = {
  fontSize: "42px",
  color: "#C4A77D",
  marginBottom: "40px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  backgroundColor: "#202020",
  padding: "25px",
  borderRadius: "20px",
  border: "1px solid #303030",
};

const cardTitle = {
  color: "#C4A77D",
  marginBottom: "20px",
};

const primaryButton = {
  backgroundColor: "#C4A77D",
  color: "#141414",
  border: "none",
  padding: "14px 28px",
  borderRadius: "999px",
  cursor: "pointer",
  fontWeight: "bold",
};

const secondaryButton = {
  backgroundColor: "transparent",
  color: "#C4A77D",
  border: "1px solid #C4A77D",
  padding: "14px 28px",
  borderRadius: "999px",
  cursor: "pointer",
};

const smallButton = {
  backgroundColor: "#C4A77D",
  color: "#141414",
  border: "none",
  padding: "10px 18px",
  borderRadius: "999px",
  cursor: "pointer",
  marginTop: "20px",
};

const badgeStyle = {
  border: "1px solid #C4A77D",
  color: "#C4A77D",
  padding: "8px 16px",
  borderRadius: "999px",
};
