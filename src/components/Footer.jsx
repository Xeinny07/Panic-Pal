export default function Footer() {
  return (
    <footer className="bg-lilac text-butter py-4 text-center">
      <p className="text-sm">Panic Pal is for reassurance, not a replacement for medical advice.</p>
      <p className="text-xs mt-1">© {new Date().getFullYear()}</p>
    </footer>
  );
}