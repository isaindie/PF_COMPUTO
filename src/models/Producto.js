import { Schema, model } from "mongoose";

const ProductoSchema = new Schema(
    {
        Nombre_prod: { type: String, trim: true },
        Precio: { type: Int16Array, required: true, unique: true, trim: true },
        Descripcion_prod: { type: String, required: true },
        Stock: { type: Int16Array, required: true},
    },
    {
      timestamps: true,
    }
  );
  
  export default model("Productos", ProductoSchema);