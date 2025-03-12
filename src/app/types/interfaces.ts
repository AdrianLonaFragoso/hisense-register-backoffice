export interface IParticipante {
  id?: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  correo_electronico: string;
  codigo_confirmacion: string;
  cargo: string;
  ciudad_origen: string;
  ciudad_evento: string;
  tipo_asistente: string;
}
