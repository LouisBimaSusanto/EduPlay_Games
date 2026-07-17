export async function GET(req, { params }) {
  try {
    const { modulId, levelId } = await params;
    const data = await import(`@/data/${modulId}/${levelId}/games.json`);
    return Response.json(data.default);
  } catch {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }
}