import httpx from 'httpx';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const { message, systemInstruction } = req.body || {};
    if (!message) {
      return res.status(400).json({ error: 'message is required' });
    }
    const backendUrl = process.env.BACKEND_URL || process.env.VITE_BACKEND_URL || 'http://localhost:8000';
    const r = await httpx.request('POST', `${backendUrl}/api/askAgent`, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, systemInstruction })
    });
    const data = JSON.parse(Buffer.from(await r.arrayBuffer()).toString());
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: 'Server error', detail: String(e).slice(0,500) });
  }
}
