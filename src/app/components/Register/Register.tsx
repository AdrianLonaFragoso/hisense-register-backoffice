"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { IParticipante } from "../../types/interfaces";

export default function Register() {
  const [form, setForm] = useState<IParticipante>({
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    correo_electronico: "",
    codigo_confirmacion: "",
    cargo: "",
    ciudad_origen: "",
    ciudad_evento: "",
    tipo_asistente: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://event-register-service.vercel.app/participantes",
        form
      );
      alert("Registro exitoso");
      router.push("/BackOffice");
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Error al registrar");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Registro de Participante</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            value={(form as any)[key]} // Para evitar errores de TS con `Object.keys`
            onChange={handleChange}
            placeholder={key.replace("_", " ")}
            className="p-2 border rounded-md"
            required
          />
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Registrar
        </button>
      </form>
    </div>
  );
}
