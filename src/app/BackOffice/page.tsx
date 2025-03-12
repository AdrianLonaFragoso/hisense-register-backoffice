"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { IParticipante } from "../types/interfaces";

export default function BackOffice() {
  const [participantes, setParticipantes] = useState<IParticipante[]>([]);

  useEffect(() => {
    axios
      .get("https://event-register-service.vercel.app/participantes")
      .then((res) => setParticipantes(res.data))
      .catch((error) =>
        console.error("Error al obtener participantes:", error)
      );
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Lista de Participantes
      </h2>

      {participantes.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Nombre</th>
                <th className="border border-gray-300 px-4 py-2">Apellido</th>
                <th className="border border-gray-300 px-4 py-2">Correo</th>
                <th className="border border-gray-300 px-4 py-2">Cargo</th>
                <th className="border border-gray-300 px-4 py-2">
                  Ciudad Origen
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Ciudad Evento
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Tipo Asistente
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Código Confirmación
                </th>
              </tr>
            </thead>
            <tbody>
              {participantes.map((p, index) => (
                <tr key={index} className="text-center odd:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {p.nombre}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.apellido_paterno} {p.apellido_materno}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.correo_electronico}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.cargo}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.ciudad_origen}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.ciudad_evento}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.tipo_asistente}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {p.codigo_confirmacion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center mt-4">No hay participantes registrados.</p>
      )}
    </div>
  );
}
