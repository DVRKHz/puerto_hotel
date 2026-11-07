import sql from "mssql";

const sqlConfig: sql.config = {
  user: process.env.DB_USER || "sa",
  password: process.env.DB_PASSWORD || "",
  server: process.env.DB_SERVER || "localhost",
  port: parseInt(process.env.DB_PORT || "1433", 10),
  database: process.env.DB_DATABASE || "puerto_hotel",
  options: {
    encrypt: process.env.DB_ENCRYPT === "true", // true para Azure, false para local
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE !== "false", // true para certificados autofirmados locales
    connectTimeout: 5000,
    requestTimeout: 10000,
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

let poolPromise: Promise<sql.ConnectionPool> | null = null;

export async function getDbPool(): Promise<sql.ConnectionPool> {
  if (!poolPromise) {
    poolPromise = sql
      .connect(sqlConfig)
      .then((pool) => {
        console.log(`✅ Conexión establecida exitosamente con SQL Server (${sqlConfig.database})`);
        return pool;
      })
      .catch((err) => {
        poolPromise = null;
        console.warn("⚠️ No se pudo conectar a SQL Server:", err.message);
        throw err;
      });
  }
  return poolPromise;
}

export { sql };

