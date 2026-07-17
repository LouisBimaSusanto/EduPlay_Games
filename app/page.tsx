export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f4f8', fontFamily: 'sans-serif', flexDirection: 'column' }}>
      <h1 style={{ color: '#1a202c', fontSize: '2rem', marginBottom: '1rem' }}>EduPlayKids Game Repo 🎮</h1>
      <p style={{ color: '#4a5568', fontSize: '1.2rem' }}>Aplikasi ini berjalan sebagai Micro-frontend dan API untuk game EduPlayKids.</p>
      <p style={{ color: '#718096', fontSize: '1rem', marginTop: '2rem' }}>Kembali ke aplikasi utama (Anak) di port 3000 untuk bermain.</p>
    </div>
  );
}
