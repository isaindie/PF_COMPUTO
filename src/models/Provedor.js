import { Schema, model } from "mongoose";

const ProvSchema = new Schema(
    {
        NombreProv: { type: String, trim: true },
        emailProv: { type: String, required: true, unique: true, trim: true },
        Telefono: {type: Int16Array, required: true},
        Dir: {type: String, required: true}
    },
    {
      timestamps: true,
    }
  );
  
  export default model("Provedor", ProvSchema);