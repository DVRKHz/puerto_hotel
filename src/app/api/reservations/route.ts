import { NextResponse } from "next/server";
import { getDbPool, sql } from "@/lib/db";
import { HOTELES_DATA, HABITACIONES_DATA } from "@/data/rooms";
import { ReservationRequest, ReservationResponse } from "@/types/hotel";

export async function POST(request: Request) {
  try {
    const body: ReservationRequest = await request.json();
    const {
      id_habitacion,
      id_hotel,
      fecha_entrada,
      fecha_salida,
      num_huespedes = 1,
      nombre,
      apellidos,
      correo,
      telefono,
      metodo_pago = "tarjeta",
    } = body;

    // Validación básica de campos requeridos
    if (!id_habitacion || !fecha_entrada || !fecha_salida || !nombre || !apellidos || !correo) {
      return NextResponse.json(
        { success: false, message: "Faltan campos obligatorios para completar la reservación." },
        { status: 400 }
      );
    }

    // Buscar habitación y hotel para detalles informativos en la respuesta
    const habitacion =
      HABITACIONES_DATA.find((h) => h.id_habitacion === Number(id_habitacion)) ||
      HABITACIONES_DATA[0];

    const hotel =
      HOTELES_DATA.find((h) => h.id_hotel === Number(id_hotel || habitacion.id_hotel)) ||
      HOTELES_DATA[0];

    // Conectar a SQL Server y ejecutar el procedimiento almacenado
    const pool = await getDbPool();
    const req = pool.request();

    req.input("nombre", sql.VarChar(60), nombre);
    req.input("apellidos", sql.VarChar(80), apellidos);
    req.input("correo", sql.VarChar(100), correo);
    req.input("telefono", sql.VarChar(15), telefono || null);
    req.input("id_habitacion", sql.Int, Number(id_habitacion));
    req.input("fecha_entrada", sql.Date, fecha_entrada);
    req.input("fecha_salida", sql.Date, fecha_salida);
    req.input("num_huespedes", sql.TinyInt, Number(num_huespedes) || 1);
    req.input("metodo_pago", sql.VarChar(15), metodo_pago || "tarjeta");
    
    // Parámetros de salida
    req.output("id_reservacion", sql.Int);
    req.output("total_calculado", sql.Decimal(10, 2));
    req.output("mensaje", sql.VarChar(200));

    const result = await req.execute("dbo.sp_crear_reservacion");

    const idReservacion = result.output.id_reservacion;
    const totalCalculado = Number(result.output.total_calculado);
    const mensaje = result.output.mensaje;

    const dIn = new Date(fecha_entrada);
    const dOut = new Date(fecha_salida);
    let noches = 1;
    if (dIn && dOut && dOut > dIn) {
      noches = Math.ceil(Math.abs(dOut.getTime() - dIn.getTime()) / (1000 * 60 * 60 * 24));
    }

    const responsePayload: ReservationResponse = {
      success: true,
      id_reservacion: idReservacion,
      folio: `#RES-${String(idReservacion).padStart(5, "0")}`,
      cliente: {
        nombre_completo: `${nombre} ${apellidos}`,
        correo,
      },
      hotel: {
        nombre: hotel.nombre,
        ciudad: hotel.ciudad,
      },
      habitacion: {
        numero: habitacion.numero,
        tipo: habitacion.tipo_nombre || "Deluxe",
        precio_noche: habitacion.precio_noche,
      },
      fecha_entrada,
      fecha_salida,
      num_huespedes: Number(num_huespedes),
      noches,
      total: totalCalculado,
      estado: "confirmada",
      metodo_pago: metodo_pago,
      source: "SQL_SERVER",
      message: mensaje || `Reservación #${idReservacion} registrada exitosamente en SQL Server (puerto_hotel).`,
    };

    return NextResponse.json(responsePayload);
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("❌ Error al procesar la reserva en SQL Server:", errorMsg);
    return NextResponse.json(
      { 
        success: false, 
        message: errorMsg || "Error al procesar la reservación en la base de datos." 
      },
      { status: 500 }
    );
  }
}
