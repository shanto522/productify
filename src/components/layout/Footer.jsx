export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Productify. All rights reserved.
      </div>
    </footer>
  );
}
