# Puerto Hotel & Suites - Chiapas

Este proyecto es la aplicación web desarrollada en **Next.js 15 (App Router)**, **React 19**, **TypeScript** y **Tailwind CSS** para **Puerto Hotel**, una cadena de hospitalidad enfocada en los destinos y maravillas naturales del estado de **Chiapas, México**.

---

## 📍 Lugares de Chiapas Integrados

El sistema de reservas permite elegir entre los principales destinos del estado:
1. **Puerto Arista (Costa de Chiapas)** - Playas del Pacífico y atardeceres dorados en Tonalá.
2. **Puerto Chiapas / Tapachula** - Costa sur, manglares, ruta del café y del cacao.
3. **San Cristóbal de Las Casas** - Cultura colonial, calles empedradas y clima fresco de Los Altos.
4. **Tuxtla Gutiérrez & Cañón del Sumidero** - Capital y recorridos en lancha por el Cañón del Sumidero.
5. **Palenque & Selva Lacandona** - Zona arqueológica maya y cascadas de ensueño.
6. **Comitán & Lagunas de Montebello** - Lagos turquesa y arquitectura señorial.

---

## 🚀 Cómo ejecutar el proyecto

Para iniciar el servidor de desarrollo local:

```bash
npm run dev
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver la aplicación.

Para compilar para producción:

```bash
npm run build
npm run start
```

---

## 📁 Estructura del Proyecto

```text
Hotel/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── reservations/
│   │   │       └── route.ts         # Endpoint API POST con soporte para destino Chiapas
│   │   ├── globals.css              # Estilos Tailwind y gradientes personalizados
│   │   ├── layout.tsx               # Fuentes (Inter & Playfair Display) y metadatos
│   │   └── page.tsx                 # Página principal interactiva
│   ├── components/
│   │   ├── Navbar.tsx               # Barra de navegación con logo de Puerto Hotel
│   │   ├── HeroSection.tsx          # Portada con selector de destinos en Chiapas y fechas
│   │   ├── DestinationsSection.tsx  # Sección visual de los 6 destinos en Chiapas
│   │   ├── RoomsSection.tsx         # Catálogo de suites con amenidades chiapanecas
│   │   ├── ExperiencesSection.tsx   # Experiencias (Café de altura, Cañón, Spa, etc.)
│   │   ├── TestimonialsSection.tsx  # Reseñas de huéspedes que visitaron Chiapas
│   │   ├── Footer.tsx               # Pie de página y contacto en Chiapas
│   │   └── BookingModal.tsx         # Modal interactivo con cálculo de noches y destino
│   ├── data/
│   │   └── rooms.ts                 # Catálogo de habitaciones y lista de destinos de Chiapas
│   └── types/
│       └── hotel.ts                 # Tipos TypeScript (Room, ChiapasDestination, etc.)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## 🔌 Conexión con Procedimientos Almacenados SQL Server

El endpoint [`src/app/api/reservations/route.ts`](file:///c:/Users/rear0/OneDrive/Documentos/UNACH/5J\Hotel\src\app\api\reservations\route.ts) recibe el destino de Chiapas y está listo para vincularse con `sp_CrearReservacion`:

```typescript
import sql from 'mssql';

const result = await pool.request()
  .input('IdHabitacion', sql.Int, roomId)
  .input('DestinoChiapas', sql.NVarChar, destinationName)
  .input('FechaEntrada', sql.Date, checkIn)
  .input('FechaSalida', sql.Date, checkOut)
  .input('NombreCliente', sql.NVarChar, `${clientNombre} ${clientApellido}`)
  .input('Email', sql.NVarChar, clientEmail)
  .input('Telefono', sql.NVarChar, clientTel)
  .input('MontoTotal', sql.Decimal(10, 2), totalAmount)
  .execute('sp_CrearReservacion');
```
