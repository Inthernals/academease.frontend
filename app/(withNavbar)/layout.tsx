import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}
