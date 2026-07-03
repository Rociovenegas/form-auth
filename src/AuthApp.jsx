import { useState } from "react";

// Solo interfaz — sin validación ni lógica real.
// Flujo: login/registro -> al "iniciar sesión" pasa a una pantalla de bienvenida tipo Duolingo.
// Fuentes: Fraunces (título) + Inter (cuerpo) + Baloo 2 (pantalla de bienvenida, tono juguetón).

export default function AuthApp() {
  const [vista, setVista] = useState("login"); // "login" | "registro" | "inicio"

  if (vista === "inicio") {
    return <PantallaInicio onSalir={() => setVista("login")} />;
  }

  return (
    <div style={styles.pagina}>
      <div style={styles.tarjeta}>
        <div style={styles.acento} />
        <div style={styles.contenido}>
          <p style={styles.eyebrow}>
            {vista === "login" ? "Qué bueno verte de nuevo" : "Únete"}
          </p>
          <h1 style={styles.titulo}>
            {vista === "login" ? "Inicia sesión" : "Crea tu cuenta"}
          </h1>

          {vista === "login" ? (
            <>
              <form
                style={styles.formulario}
                onSubmit={(e) => {
                  e.preventDefault();
                  setVista("inicio");
                }}
              >
                <Campo label="Correo" type="email" placeholder="tucorreo@ejemplo.com" />
                <Campo label="Contraseña" type="password" placeholder="••••••••" />
                <button type="submit" style={styles.boton}>
                  Entrar
                </button>
              </form>

              <div style={styles.divisor}>
                <span style={styles.divisorLinea} />
                <span style={styles.divisorTexto}>o continúa con</span>
                <span style={styles.divisorLinea} />
              </div>

              <button
                type="button"
                onClick={() => setVista("inicio")}
                style={styles.botonGoogle}
              >
                <IconoGoogle />
                Ingresar con Google
              </button>
            </>
          ) : (
            <form
              style={styles.formulario}
              onSubmit={(e) => {
                e.preventDefault();
                setVista("login");
              }}
            >
              <Campo label="Nombre" type="text" placeholder="Tu nombre" />
              <Campo label="Apellido" type="text" placeholder="Tu apellido" />
              <Campo label="Correo" type="email" placeholder="tucorreo@ejemplo.com" />
              <Campo label="Fecha de nacimiento" type="date" />
              <Campo label="Contraseña" type="password" placeholder="••••••••" />
              <Campo label="Confirmar contraseña" type="password" placeholder="••••••••" />

              <label style={styles.checkboxFila}>
                <input type="checkbox" style={styles.checkbox} />
                <span>
                  Acepto los <span style={styles.enlaceInline}>términos y condiciones</span>
                </span>
              </label>

              <button type="submit" style={styles.boton}>
                Crear cuenta
              </button>
            </form>
          )}

          <p style={styles.pieTexto}>
            {vista === "login" ? "¿Aún no tienes cuenta? " : "¿Ya tienes cuenta? "}
            <button
              type="button"
              onClick={() => setVista(vista === "login" ? "registro" : "login")}
              style={styles.enlace}
            >
              {vista === "login" ? "Regístrate" : "Inicia sesión"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function Campo({ label, ...props }) {
  return (
    <label style={styles.label}>
      {label}
      <input style={styles.input} {...props} />
    </label>
  );
}

function PantallaInicio({ onSalir }) {
  return (
    <div style={inicioStyles.pagina}>
      <div style={inicioStyles.barraSuperior}>
        <div style={inicioStyles.rachaChip}>
          <span style={{ fontSize: 18 }}>🔥</span>
          <span>3 días</span>
        </div>
        <button type="button" onClick={onSalir} style={inicioStyles.botonSalir}>
          Salir
        </button>
      </div>

      <div style={inicioStyles.contenido}>
        <Mascota />
        <h1 style={inicioStyles.titulo}>¡Bienvenida de nuevo!</h1>
        <p style={inicioStyles.subtitulo}>Tu próxima lección te está esperando.</p>

        <div style={inicioStyles.statsFila}>
          <TarjetaStat emoji="⭐" numero="120" texto="XP" color="#FFC800" />
          <TarjetaStat emoji="🔥" numero="3" texto="Racha" color="#FF9600" />
          <TarjetaStat emoji="💎" numero="5" texto="Gemas" color="#5CC2E8" />
        </div>

        <button type="button" style={inicioStyles.botonContinuar}>
          Continuar lección
        </button>
      </div>
    </div>
  );
}

function TarjetaStat({ emoji, numero, texto, color }) {
  return (
    <div style={{ ...inicioStyles.stat, borderColor: color }}>
      <span style={{ fontSize: 20 }}>{emoji}</span>
      <span style={inicioStyles.statNumero}>{numero}</span>
      <span style={inicioStyles.statTexto}>{texto}</span>
    </div>
  );
}

function IconoGoogle() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84c-.21 1.13-.85 2.09-1.8 2.73v2.27h2.92c1.7-1.57 2.68-3.88 2.68-6.64z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.17l-2.92-2.27c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.34C2.44 15.98 5.48 18 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.72c-.18-.54-.28-1.11-.28-1.72s.1-1.18.28-1.72V4.94H.96C.35 6.17 0 7.55 0 9s.35 2.83.96 4.06l3.01-2.34z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.59-2.59C13.46.9 11.43 0 9 0 5.48 0 2.44 2.02.96 4.94l3.01 2.34C4.68 5.16 6.66 3.58 9 3.58z"
      />
    </svg>
  );
}

function Mascota() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" style={{ marginBottom: 8 }}>
      <ellipse cx="60" cy="100" rx="34" ry="8" fill="#E4F5D8" />
      <circle cx="60" cy="60" r="46" fill="#7DDA3A" />
      <circle cx="60" cy="60" r="46" fill="none" stroke="#5BB82A" strokeWidth="4" />
      <circle cx="46" cy="54" r="9" fill="#FFFFFF" />
      <circle cx="74" cy="54" r="9" fill="#FFFFFF" />
      <circle cx="48" cy="55" r="4.5" fill="#26401A" />
      <circle cx="76" cy="55" r="4.5" fill="#26401A" />
      <path d="M46 76 Q60 88 74 76" stroke="#26401A" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const styles = {
  pagina: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#F6F4EE",
    fontFamily: "'Inter', sans-serif",
    padding: "24px",
  },
  tarjeta: {
    position: "relative",
    width: "100%",
    maxWidth: 380,
    background: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
    boxShadow: "0 20px 50px -20px rgba(47, 79, 62, 0.25)",
  },
  acento: {
    height: 8,
    width: "100%",
    background: "linear-gradient(90deg, #2F4F3E, #6E8F7A)",
  },
  contenido: {
    padding: "40px 36px 36px",
  },
  eyebrow: {
    margin: "0 0 6px",
    fontSize: 13,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#6E8F7A",
    fontWeight: 600,
  },
  titulo: {
    margin: "0 0 28px",
    fontFamily: "'Fraunces', serif",
    fontSize: 30,
    fontWeight: 600,
    color: "#1F2E25",
  },
  formulario: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontSize: 13,
    color: "#4A5A50",
    fontWeight: 500,
  },
  input: {
    padding: "12px 14px",
    fontSize: 15,
    fontFamily: "'Inter', sans-serif",
    border: "1.5px solid #E4E1D6",
    borderRadius: 10,
    outline: "none",
    background: "#FBFAF6",
    color: "#1F2E25",
  },
  checkboxFila: {
    display: "flex",
    alignItems: "flex-start",
    gap: 8,
    fontSize: 13,
    color: "#4A5A50",
    lineHeight: 1.4,
  },
  checkbox: {
    marginTop: 2,
  },
  enlaceInline: {
    color: "#2F4F3E",
    fontWeight: 600,
    textDecoration: "underline",
  },
  boton: {
    marginTop: 8,
    padding: "13px 0",
    fontSize: 15,
    fontWeight: 600,
    color: "#FFFFFF",
    backgroundColor: "#2F4F3E",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
  },
  divisor: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "22px 0",
  },
  divisorLinea: {
    flex: 1,
    height: 1,
    background: "#E4E1D6",
  },
  divisorTexto: {
    fontSize: 12,
    color: "#9C9C94",
    fontWeight: 500,
  },
  botonGoogle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "12px 0",
    fontSize: 14,
    fontWeight: 600,
    color: "#3C3C3C",
    backgroundColor: "#FFFFFF",
    border: "1.5px solid #E4E1D6",
    borderRadius: 10,
    cursor: "pointer",
  },
  pieTexto: {
    marginTop: 24,
    marginBottom: 0,
    fontSize: 13.5,
    color: "#6B7268",
    textAlign: "center",
  },
  enlace: {
    background: "none",
    border: "none",
    padding: 0,
    fontSize: 13.5,
    fontWeight: 600,
    color: "#2F4F3E",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

const inicioStyles = {
  pagina: {
    minHeight: "100vh",
    background: "#FFFFFF",
    fontFamily: "'Baloo 2', 'Inter', sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  barraSuperior: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
  },
  rachaChip: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    background: "#FFF4E0",
    color: "#B25D00",
    fontWeight: 700,
    fontSize: 14,
    padding: "6px 14px",
    borderRadius: 999,
  },
  botonSalir: {
    background: "none",
    border: "none",
    fontSize: 14,
    fontWeight: 600,
    color: "#9C9C94",
    cursor: "pointer",
  },
  contenido: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 24px 48px",
  },
  titulo: {
    margin: "8px 0 4px",
    fontSize: 26,
    fontWeight: 700,
    color: "#3C3C3C",
  },
  subtitulo: {
    margin: "0 0 28px",
    fontSize: 15,
    color: "#8C8C84",
  },
  statsFila: {
    display: "flex",
    gap: 12,
    marginBottom: 32,
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    background: "#FBFBF8",
    border: "2px solid",
    borderRadius: 16,
    padding: "14px 20px",
    minWidth: 76,
  },
  statNumero: {
    fontSize: 18,
    fontWeight: 700,
    color: "#3C3C3C",
  },
  statTexto: {
    fontSize: 11,
    fontWeight: 600,
    color: "#9C9C94",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },
  botonContinuar: {
    width: "100%",
    maxWidth: 280,
    padding: "16px 0",
    fontSize: 16,
    fontWeight: 700,
    color: "#FFFFFF",
    backgroundColor: "#58CC02",
    border: "none",
    borderBottom: "4px solid #46A302",
    borderRadius: 14,
    cursor: "pointer",
  },
};
