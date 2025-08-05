// src/pages/api/submit.ts

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    console.log('Datos recibidos desde el cliente:', data);

    // Aquí podrías guardar en DB, enviar email, etc.
    res.status(200).json({ success: true, message: 'Datos procesados correctamente' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
