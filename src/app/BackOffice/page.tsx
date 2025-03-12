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
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Lista de Participantes</h2>
      <ul className="list-disc pl-4">
        {participantes.length > 0 ? (
          participantes.map((p, index) => (
            <li key={index} className="mb-2">
              {p.nombre} <br /> {p.apellido_paterno} <br /> ({p.tipo_asistente})
              <br />
              {p.ciudad_evento} <br /> {p.correo_electronico} <br />
              {p.tipo_asistente} <br /> {p.codigo_confirmacion}
            </li>
          ))
        ) : (
          <p>No hay participantes registrados.</p>
        )}
      </ul>
    </div>
  );
}
